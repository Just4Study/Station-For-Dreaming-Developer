from django.urls import path

from . import views

urlpatterns = [
    #GET Method
    #모든 Mentor List를 리턴 / input : request / return : 성공 시 200 OK, seralized representation 리턴
    path('', views.ListMentor.as_view()),

    #GET Method
    #특정 Mentor 조회 / input : request / return : 성공 시 200 OK, serialized representation 리턴 & 실패 시 404 Not Found 리턴
    path('<int:pk>/', views.DetailMentor.as_view()),
]