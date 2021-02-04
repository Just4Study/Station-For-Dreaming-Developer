from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListMentor.as_view()),
    path('<int:pk>/', views.DetailMentor.as_view()),
]