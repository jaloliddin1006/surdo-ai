from django.urls import path
from home import views


urlpatterns = [
    path('', views.HomaPageView.as_view(), name='home'),
    path('camera/', views.CameraPageView.as_view(), name='camera'),
    path('voice/', views.VoicePageView.as_view(), name='voice'),
    path('video/', views.VideoPageView.as_view(), name='video'),
]
