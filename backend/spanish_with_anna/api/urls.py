from django.urls import include, path, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.routers import DefaultRouter
from rest_framework.permissions import AllowAny

from api.views import FeedBackViewSet


schema_view = get_schema_view(
    openapi.Info(
        title="SpanishWithAnna API",
        default_version="v1",
        description="API of project",
    ),
    public=True,
    permission_classes=(AllowAny,),
)

router = DefaultRouter()

router.register("feedbacks", FeedBackViewSet, basename="feedback")

urlpatterns = [
    path("", include(router.urls)),
    re_path(
        r"docs/$",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
]
