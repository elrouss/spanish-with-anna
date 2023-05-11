from django.utils import timezone
from rest_framework import serializers

from users.models import Feedback


class CreateFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name', 'email', 'phone', 'message', 'time_create', 'is_agree',
        )
        model = Feedback


class ReadFeedbackSerializer(serializers.ModelSerializer):
    is_finished = serializers.SerializerMethodField('get_is_finished')
    is_double = serializers.SerializerMethodField('get_is_double')
    comment = serializers.SerializerMethodField('get_comment')
    time_update = serializers.SerializerMethodField('get_time_update')

    class Meta:
        fields = (
            'id',
            'name',
            'email',
            'phone',
            'message',
            'time_create',
            'user',
            'is_agree',
            'comment',
            'is_finished',
            'is_double',
            'time_update',
        )
        model = Feedback

    def get_is_finished(self, obj):
        return obj.is_finished
    
    def get_is_double(self, obj):
        return obj.is_double
    
    def get_comment(self, obj):
        return obj.comment
    
    def get_time_update(self, obj):
        return timezone.now()
