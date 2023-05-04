from django.contrib import admin
from django.contrib.auth import get_user_model

from users.models import CustomUser, Feedback

User = get_user_model()


@admin.register(CustomUser)
class AdminCustomUser(admin.ModelAdmin):
    pass


@admin.register(Feedback)
class AdminFeedback(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'message', 'user', 'time_create')
    list_filter = ('email', 'time_create', 'user')
