from django.contrib import admin
from django.contrib.auth import get_user_model

from users.models import Feedback

User = get_user_model()


@admin.register(Feedback)
class AdminFeedback(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'time_create', 'user', 'message')
    list_filter = ('email', 'time_create', 'user')
    search_fields = ('email', 'message')
