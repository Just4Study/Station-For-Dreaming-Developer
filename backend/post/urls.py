from django.urls import path
from . import views

urlpatterns = [

    #get Method
    #모든 Post List를 리턴 / input : request / return : 성공 시 200 OK, seralized representation 리턴
    #Filter 기능 추가 : get Method로 넘겨줄 시에 쿼리스트링이 있을 시 필터

    #post Method
    #Post 생성 / input : request / return : 성공 시 201 Create 리턴, seralized representation 리턴
    path('', views.PostList.as_view()), 

    #get Method
    #특정 Post 조회 / input : request / return : 성공 시 200 OK, serialized representation 리턴 & 실패 시 404 Not Found 리턴
    path('<int:pk>/', views.PostDetail.as_view()), 
]
