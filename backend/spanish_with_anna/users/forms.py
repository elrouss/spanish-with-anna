from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from users.models import CustomUser


class CustomUserCreationForm(forms.ModelForm):
    """
    Форма для создания пользователя.
    """

    password = forms.CharField(
        label='Пароль',
        widget=forms.PasswordInput,
    )
    password_confirmation = forms.CharField(
        label='Подтверждение пароля',
        widget=forms.PasswordInput,
    )

    class Meta:
        model = CustomUser
        fields = ('email', 'name', 'role', 'phone',)

    def clean_password_confirmation(self):
        """
        Функция проверяет, что введенные пароли совпадают.
        """
        password = self.cleaned_data.get('password')
        password_confirmation = self.cleaned_data.get('password_confirmation')
        if password and password_confirmation and (
                password != password_confirmation):
            raise ValidationError("Указанные пароли нес совпадают.")

        return password_confirmation

    def save(self, commit=True):
        """
        Функция создает пользователя и сохраняет пароль в хешированном виде.
        """
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()

        return user


class CustomUserChangeForm(forms.ModelForm):
    """
    Форма для обновления пользователей. Включает все поля пользователя.
    """

    password = ReadOnlyPasswordHashField(label=(" Пароль"), help_text=(
        "Просмотреть пароль пользователя невозможно. Для изменения "
        "пароля используйте <a href=\"../password/\">эту форму</a>."))

    class Meta:
        model = CustomUser
        fields = (
            'name', 'email', 'password', 'phone', 'role', 'courses',
            'is_active', 'is_staff', 'is_superuser',
        )
