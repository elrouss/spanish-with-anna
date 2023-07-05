"""
Описания классов менеджеров моделей.
"""


from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    """
    Менеджер модели CustomUser для аутентификации при помощи email.
    """

    def create_user(self, email, password, name, **other_fields):
        """
        Функция, создающая пользователя.
        """
        if not email:
            raise ValueError("Не указан email.")

        user = self.model(
            email=self.normalize_email(email), name=name, **other_fields
        )

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, name, **other_fields):
        """
        Функция, создающая суперпользователя.
        """
        user = self.create_user(
            email=email,
            password=password,
            name=name,
            **other_fields,
        )

        user.is_staff = True
        user.is_superuser = True
        user.is_email_confirmed = True
        user.save()

        return user
