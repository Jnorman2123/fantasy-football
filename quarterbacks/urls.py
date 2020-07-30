from django.urls import path
from . import views

urlpatterns = [
    path('api/quarterback/', views.QuarterbackListCreate.as_view()),
]
