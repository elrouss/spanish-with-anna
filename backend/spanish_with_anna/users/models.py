from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class CustomUser(AbstractUser):
    """Модель пользователя"""
    pass


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
    )
    time_create = models.DateTimeField(
        'Дата создания',
        auto_now_add=True,
        )
    user = models.ForeignKey(
        verbose_name='Пользователь',
        to=settings.AUTH_USER_MODEL,
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

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'
        ordering = ['-time_create']

    def str(self):
        return f'Вам письмо от {self.email}'
