from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from courses.models import Course
from users.managers import CustomUserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    Модель для описания пользователя.
    """

    USER = 'user'
    STUDENT = 'student'
    ADMIN = 'admin'

    A0 = 'A0'
    A1 = 'A1'
    A2 = 'A2'
    B1 = 'B1'
    B2 = 'B2'
    C1 = 'C1'
    C2 = 'C2'

    ROLE_CHOICES = (
        (USER, 'Пользователь'),
        (STUDENT, 'Студент'),
        (ADMIN, 'Администратор')
    )

    LANGUAGE_LEVEL_CHOICES = (
        (A0, 'Нулевой'),
        (A1, 'Начальный'),
        (A2, 'Базовый'),
        (B1, 'Средний'),
        (B2, 'Выше среднего'),
        (C1, 'Продвинутый'),
        (C2, 'Владение в совершенстве'),
    )

    name = models.CharField(
        'Имя пользователя',
        max_length=64,
    )
    email = models.EmailField(
        'Адрес e-mail',
        max_length=254,
        unique=True,
        error_messages={
            'unique': 'Пользователь с указанным e-mail уже существует.',
        }
    )
    phone = PhoneNumberField(
        'Номер телефона',
        blank=True,
        null=True,
    )
    date_of_birth = models.DateField(
        'Дата рождения',
        blank=True,
        null=True,
    )
    role = models.CharField(
        'Роль пользователя',
        choices=ROLE_CHOICES,
        max_length=15,
        default=USER,
    )
    language_level = models.CharField(
        'Уровень владения языком',
        max_length=2,
        choices=LANGUAGE_LEVEL_CHOICES,
        default=A0,
    )
    courses = models.ManyToManyField(
        Course,
        verbose_name='Курсы пользователя',
        related_name='courses',
    )
    is_active = models.BooleanField(
        'Статус пользователя (активный/неактивный)',
        default=True,
    )
    is_staff = models.BooleanField(
        'Доступ к админке Django (да/нет)',
        default=False,
    )
    is_superuser = models.BooleanField(
        'Суперпользователь (да/нет)',
        default=False,
    )
    date_joined = models.DateTimeField(
        'Дата регистрации',
        auto_now_add=True,
    )
    is_email_confirmed = models.BooleanField(
        "Статус подтверждения email",
        default=False,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = [
        'name',
    ]

    EMAIL_FIELD = 'email'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ('email',)

    def __str__(self):
        return f'{self.email}'

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

    name = models.CharField(
        'Имя',
        max_length=64,
    )
    email = models.EmailField(
        'Email',
        max_length=256,
    )
    phone = PhoneNumberField(
        'Телефон',
        blank=True,
        null=True,
    )
    message = models.TextField(
        'Сообщение',
        max_length=1024,
    )
    time_create = models.DateTimeField(
        'Дата создания',
        auto_now_add=True,
        )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name='Пользователь',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='feedbacks',
    )
    is_agree = models.BooleanField(
        'Согласие на обработку персональных данных',
        default=False,
        blank=False,
        null=False,
        )
    is_finished = models.BooleanField(
        'Обращение обратной связи закрыто',
        default=False,
        )
    is_double = models.BooleanField(
        'Дубль обращения обратной связи',
        default=False,
        )
    comment = models.TextField(
        'Комментарий к обратной связи',
    )
    time_update = models.DateTimeField(
        'Дата обновления',
        auto_now=True,
        )

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'
        ordering = ['-time_create',]

    def str(self):
        return f'Вам письмо от {self.email}'


    def save(self, *args, **kwargs):
        """
        Переопределяет метод save() для создания/обновления объектов модели.
        """
        users_by_email = CustomUser.objects.filter(email=self.email)
        if users_by_email.count() > 0:
            self.user = users_by_email[0]
            super().save(*args, **kwargs)
        else:
            super().save(*args, **kwargs)
