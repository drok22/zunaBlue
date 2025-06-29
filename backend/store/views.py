import datetime
from django.db import connection
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

APP_STARTED_AT = datetime.datetime.now(datetime.timezone.utc)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['GET'])
def ping(request):
    return Response({"message": "pong"})


def health_check(request):
    return JsonResponse({"status": "ok"})


def status_check(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        db_status = "ok"
    except Exception as e:
        db_status = f"error: {e}"

    uptime: datetime = datetime.datetime.now(datetime.timezone.utc) - APP_STARTED_AT

    return JsonResponse({
        "status": "running",
        "db": db_status,
        "uptime_seconds": int(uptime.total_seconds()),
        "app": "My Web Store API",
        "version": "1.0.0"
    })
