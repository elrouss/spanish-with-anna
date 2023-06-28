from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import FeedBackViewSet, UserViewSet

router = DefaultRouter()

router.register('feedbacks', FeedBackViewSet, basename='feedback')
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
]
