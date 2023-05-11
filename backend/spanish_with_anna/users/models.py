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
        'Дата отправки',
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
    is_agree = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)
    is_double = models.BooleanField(default=False)
    comment = models.TextField()

    def save(self, *args, **kwargs):
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
