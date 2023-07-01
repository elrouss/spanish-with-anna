from rest_framework import serializers

from users.models import Feedback


class CreateFeedbackSerializer(serializers.ModelSerializer):
    """
    Сериализатор для обработки запросов на создание обратной связи.
    """

    class Meta:
        fields = (
            'name',
            'email',
            'phone',
            'preferred_communication',
            'message',
            'time_create',
            'is_agree',
        )
        model = Feedback


class ReadFeedbackSerializer(serializers.ModelSerializer):
    """
    Сериализатор для обработки запросов
    на чтение и редактирование обратной связи.
    """

    is_finished = serializers.SerializerMethodField('get_is_finished')
    is_double = serializers.SerializerMethodField('get_is_double')
    comment = serializers.SerializerMethodField('get_comment')

    class Meta:
        fields = (
            'id',
            'name',
            'email',
            'phone',
            'preferred_communication',
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
        """
        Возвращает значение поля is_finished для объекта модели обратной связи.
        """
        return obj.is_finished

    def get_is_double(self, obj):
        """
        Возвращает значение поля is_duble для объекта модели обратной связи.
        """
        return obj.is_double

    def get_comment(self, obj):
        """
        Возвращает значение поля comment для объекта модели обратной связи.
        """
        return obj.comment
