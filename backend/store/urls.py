from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import health_check, ping, ProductViewSet, status_check

router = DefaultRouter()
router.register(r'products', ProductViewSet)
# FIXME: figure out if we want to register this endpoint router.register('ping', )

urlpatterns = [
    path('', include(router.urls)),
    path('ping/', ping),  # <- add this line
    path('health/', health_check),
    path('status/', status_check),
]
