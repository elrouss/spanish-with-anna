from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import FeedBackViewSet

router = DefaultRouter()

router.register('feedbacks', FeedBackViewSet, basename='feedback')

urlpatterns = [
    path('', include(router.urls)),
]
