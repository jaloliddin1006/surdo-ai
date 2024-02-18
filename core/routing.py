# your_project/routing.py

from django.urls import re_path
from .import consumers

websocked_urlpatterns = [
    re_path(r'ws/text/', consumers.YourConsumer.as_asgi())
]