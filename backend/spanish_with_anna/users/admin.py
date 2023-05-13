from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError

from users.models import CustomUser, Feedback


admin.site.site_header = 'Администрирование сайта Spanish With Anna'
admin.site.index_title = 'Добро пожаловать!'
admin.site.site_title = 'Spanish With Anna Административный портал'


@admin.register(Feedback)
class AdminFeedback(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'time_create', 'user', 'message')
    list_filter = ('email', 'time_create', 'user')
    search_fields = ('email', 'message')


class CustomUserCreationForm(forms.ModelForm):
    """
    Форма для создания пользователя.
    """

    password1 = forms.CharField(
        label='Пароль',
        widget=forms.PasswordInput,
    )
    password2 = forms.CharField(
        label='Подтверждение пароля',
        widget=forms.PasswordInput,
    )

    class Meta:
        model = CustomUser
        fields = ('email', 'name', 'role', 'phone',)

    def clean_password2(self):
        """
        Функция проверяет, что введенные пароли совпадают.
        """
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise ValidationError("Указанные пароли нес совпадают.")

        return password2

    def save(self, commit=True):
        """
        Функция создает пользователя и сохраняет пароль в хешированном виде.
        """
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
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


class CustomUserAdmin(BaseUserAdmin):
    """
    Класс для настройки отображения модели пользователя.
    """

    form = CustomUserChangeForm
    add_form = CustomUserCreationForm

    # Эти поля отображаются при изменении пользователя администратором.
    list_display = (
        'name', 'email', 'phone', 'role', 'password',
    )
    list_filter = ('email',)
    fieldsets = (
        (None, {
            'fields': ('email', 'name', 'phone', )
        }),
        ('Personal info', {
            'fields': ('role', 'password',)
        }),
        ('Permissions', {
            'fields': (
                'is_active', 'is_staff', 'is_superuser', 'user_permissions',
            )
        }),
        ('Important dates', {
            'fields': ('last_login', 'date_joined',)
        }),
    )

    # Поля, используемые админиcтратором для создания пользователя.
    add_fieldsets = (
        (None, {
            'fields': (
                'email', 'name', 'phone', 'role', 'password1', 'password2',
            ),
        }),
        (('Permissions'), {
            'fields': (
                'is_active', 'is_staff', 'is_superuser', 'user_permissions',
            )
        }),
        (('Important dates'), {
            'fields': ('last_login', 'date_joined',)
        }),
    )

    readonly_fields = (
        'date_joined',
        'last_login',
    )

    list_filter = ('email', 'role')
    search_fields = ['email']
    ordering = ['email']
    filter_horizontal = []


admin.site.register(CustomUser, CustomUserAdmin)

admin.site.unregister(Group)
