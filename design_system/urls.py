from django.urls import path
from design_system.views import home

app_name = "design_system"

urlpatterns = [
    path("", home)
]
