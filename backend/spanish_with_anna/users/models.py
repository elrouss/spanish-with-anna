from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

from courses.models import Course
from users.managers import CustomUserManager

USERNAME_MAX_CHAR = 150
EMAIL_MAX_CHAR = 254
ROLE_MAX_CHAR = 15
LANGUAGE_LEVEL_MAX_CHAR = 2
PREFFERED_COMMUNICATION_MAX_CHAR = 15
MESSAGE_MAX_CHAR = 1024


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    Модель для описания пользователя.
    """

    USER = "user"
    STUDENT = "student"
    ADMIN = "admin"

    A0 = "A0"
    A1 = "A1"
    A2 = "A2"
    B1 = "B1"
    B2 = "B2"
    C1 = "C1"
    C2 = "C2"

    ROLE_CHOICES = (
        (USER, "Пользователь"),
        (STUDENT, "Студент"),
        (ADMIN, "Администратор"),
    )

    LANGUAGE_LEVEL_CHOICES = (
        (A0, "Нулевой"),
        (A1, "Начальный"),
        (A2, "Базовый"),
        (B1, "Средний"),
        (B2, "Выше среднего"),
        (C1, "Продвинутый"),
        (C2, "Владение в совершенстве"),
    )

    name = models.CharField(
        "Имя пользователя",
        max_length=USERNAME_MAX_CHAR,
        validators=(RegexValidator("^[a-zA-Za-яА-ЯёЁ -_]+$"),),
    )
    email = models.EmailField(
        "Адрес e-mail",
        max_length=EMAIL_MAX_CHAR,
        unique=True,
        error_messages={
            "unique": "Пользователь c указанным e-mail уже существует.",
        },
    )
    phone = PhoneNumberField(
        "Номер телефона",
        blank=True,
        null=True,
        unique=True,
        error_messages={
            "unique": "Пользователь c указанным номером"
            "телефона уже существует.",
        },
    )
    date_of_birth = models.DateField(
        "Дата рождения",
        blank=True,
        null=True,
    )
    role = models.CharField(
        "Роль пользователя",
        choices=ROLE_CHOICES,
        max_length=ROLE_MAX_CHAR,
        default=USER,
    )
    language_level = models.CharField(
        "Уровень владения языком",
        max_length=LANGUAGE_LEVEL_MAX_CHAR,
        choices=LANGUAGE_LEVEL_CHOICES,
        default=A0,
    )
    courses = models.ManyToManyField(
        Course,
        verbose_name="Курсы пользователя",
        related_name="courses",
    )
    is_active = models.BooleanField(
        "Статус пользователя (активный/неактивный)",
        default=True,
    )
    is_staff = models.BooleanField(
        "Доступ к админке Django (да/нет)",
        default=False,
    )
    is_superuser = models.BooleanField(
        "Суперпользователь (да/нет)",
        default=False,
    )
    date_joined = models.DateTimeField(
        "Дата регистрации",
        auto_now_add=True,
    )
    is_email_confirmed = models.BooleanField(
        "Статус подтверждения email",
        default=False,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
        "name",
    ]

    EMAIL_FIELD = "email"

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ("email",)

    def __str__(self):
        return f"{self.email}"

    @property
    def is_admin(self):
        return self.role == CustomUser.ADMIN

    @property
    def is_student(self):
        return self.role == CustomUser.STUDENT

    @property
    def is_user(self):
        return self.role == CustomUser.USER

    def get_full_name(self):
        """
        Функция возвращает полное имя пользователя.
        """
        return self.name


class Feedback(models.Model):
    """
    Модель для описания обратной связи.
    """

    PHONE = "phone"
    EMAIL = "email"

    COMMUNICATION_CHOICES = (
        (PHONE, "Телефон"),
        (EMAIL, "Email"),
    )

    name = models.CharField(
        "Имя",
        max_length=USERNAME_MAX_CHAR,
        validators=(RegexValidator("^[a-zA-Zа-яА-ЯёЁ -_]+$"),),
    )
    email = models.EmailField(
        "Email",
        max_length=EMAIL_MAX_CHAR,
    )
    phone = PhoneNumberField(
        "Телефон",
        blank=True,
        null=True,
    )
    preferred_communication = models.CharField(
        "Предпочитаемый способ коммуникации",
        max_length=PREFFERED_COMMUNICATION_MAX_CHAR,
        choices=COMMUNICATION_CHOICES,
        default=EMAIL,
    )
    message = models.TextField(
        "Сообщение",
        max_length=MESSAGE_MAX_CHAR,
    )
    time_create = models.DateTimeField(
        "Дата создания",
        auto_now_add=True,
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name="Пользователь",
        on_delete=models.PROTECT,
        blank=True,
        null=True,
        related_name="feedbacks",
    )
    is_agree = models.BooleanField(
        "Согласие на обработку персональных данных",
        default=False,
    )
    is_finished = models.BooleanField(
        "Обращение обратной связи закрыто",
        default=False,
    )
    is_double = models.BooleanField(
        "Дубль обращения обратной связи",
        default=False,
    )
    comment = models.TextField(
        "Комментарий к обратной связи",
        blank=True,
        null=True,
    )
    time_update = models.DateTimeField(
        "Дата обновления",
        auto_now=True,
    )

    class Meta:
        verbose_name = "Обратная связь"
        verbose_name_plural = "Обратная связь"
        ordering = ("-time_create",)

    def str(self):
        return f"Вам письмо от {self.email}"

    def save(self, *args, **kwargs):
        """
        Переопределяет метод save() для создания/обновления объектов модели.
        """

        matching_users = CustomUser.objects.filter(
            models.Q(email=self.email) | models.Q(phone=self.phone)
        )
        self.user = matching_users.first() if matching_users.exists() else None
        super().save(*args, **kwargs)

    def clean(self):
        """
        Переопределяет метод clean() для очищения данных и объектов,
        связанных с текущим экземпляром класса.
        """

        super().clean()
        if self.is_agree is False:
            raise ValidationError(
                "Необходимо согласие на обработку персональных данных!"
            )
        if self.preferred_communication == "phone" and not self.phone:
            raise ValidationError(
                "Если предпочитаемый вид связи - телефон,"
                "поле 'Телефон' не должно быть пустым."
            )
