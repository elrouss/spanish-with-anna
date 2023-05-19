from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group

from users.forms import CustomUserChangeForm, CustomUserCreationForm
from users.models import CustomUser, Feedback


admin.site.site_header = 'Администрирование сайта Spanish With Anna'
admin.site.index_title = 'Добро пожаловать!'
admin.site.site_title = 'Spanish With Anna Административный портал'


@admin.register(Feedback)
class AdminFeedback(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'time_create', 'user', 'message')
    list_filter = ('email', 'time_create', 'user')
    search_fields = ('email', 'message')


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
                'email', 'name', 'phone', 'role', 'password',
                'password_confirmation',
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
