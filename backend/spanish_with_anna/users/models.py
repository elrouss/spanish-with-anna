import phonenumbers
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.core.validators import EmailValidator
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class CustomUser(AbstractUser):
    """Модель пользователя"""
    pass


class Feedback(models.Model):
    """Модель обратной связи"""
    name = models.CharField(
        max_length=64,
        verbose_name='Имя',
    )
    email = models.EmailField(
        max_length=256,
        verbose_name='Email',
        validators=[EmailValidator(
            message='Неправильный формат адреса электронной почты')],
    )
    phone = PhoneNumberField(
        blank=True,
        null=True,
        verbose_name='Телефон',
    )
    message = models.TextField(
        verbose_name='Сообщение',
    )
    time_create = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата отправки'
        )
    user = models.ForeignKey(
        CustomUser,
        verbose_name='Пользователь',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def clean(self):
        super().clean()
        if self.phone:
            try:
                parsed_number = phonenumbers.parse(self.phone.as_e164)
                if not phonenumbers.is_valid_number(parsed_number):
                    raise ValidationError('Неверный формат телефонного номера.')
            except phonenumbers.phonenumberutil.NumberParseException:
                raise ValidationError('Неверный формат телефонного номера.')

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
