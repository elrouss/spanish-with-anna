# Generated by Django 4.2 on 2023-05-04 14:07

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='feedback',
            options={'ordering': ['-time_create'], 'verbose_name': 'Обратная связь', 'verbose_name_plural': 'Обратная связь'},
        ),
        migrations.AddField(
            model_name='feedback',
            name='email',
            field=models.EmailField(default=django.utils.timezone.now, max_length=256, validators=[django.core.validators.EmailValidator(message='Неправильный формат адреса электронной почты')], verbose_name='Email'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='feedback',
            name='message',
            field=models.TextField(default=django.utils.timezone.now, verbose_name='Сообщение'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='feedback',
            name='name',
            field=models.CharField(default=django.utils.timezone.now, max_length=64, verbose_name='Имя'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='feedback',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None, verbose_name='Телефон'),
        ),
        migrations.AddField(
            model_name='feedback',
            name='time_create',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Дата отправки'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='feedback',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
    ]
