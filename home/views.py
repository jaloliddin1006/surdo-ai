from django.shortcuts import render
from django.views import View
# Create your views here.

class HomaPageView(View):
    def get(self, request):
        context = {}
        return render(request, "index.html", context)
    
class CameraPageView(View):
    def get(self, request):
        context = {}
        return render(request, "camera.html", context)
    
    
class VoicePageView(View):
    def get(self, request):
        context = {}
        return render(request, "voice.html", context)