from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    """Модель пользователя"""
    pass


class Feedback(models.Model):
    """Модель обратной связи"""
    pass
