"""Views for 'api' application."""

from rest_framework import viewsets
from rest_framework.response import Response

from api.serializers import (
    CreateFeedbackSerializer,
    ReadFeedbackSerializer,
    UserSerializer
)
from users.models import CustomUser, Feedback


class FeedBackViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с обратной связью.
    """
    queryset = Feedback.objects.all()
    serializer_class = CreateFeedbackSerializer

    def get_serializer_class(self):
        """
        Возвращает класс сериализатора для данного запроса
        на основании метода запроса.
        """
        if self.request.method in ('GET', 'PATCH'):
            return ReadFeedbackSerializer
        return CreateFeedbackSerializer

    def update(self, request, *args, **kwargs):
        """
        Обновляет существующий объект обратной связи
        и возвращает его сериализованное представление.
        """
        instance = self.get_object()
        instance.is_finished = request.data.get(
            'is_finished',
            instance.is_finished
            )
        instance.is_double = request.data.get('is_double', instance.is_double)
        instance.comment = request.data.get('comment', instance.comment)
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с запросами о пользователях.
    """

    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
