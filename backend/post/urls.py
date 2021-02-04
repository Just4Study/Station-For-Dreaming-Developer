from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    # 함수형 처리시 호출되는 함수
    # url(r'^$', views.bbs_list),
    # url(r'^(?P<pk>[0-9]+)/$', views.bbs_detail),

    # 클래스를 호출하고 해당클래스의 as_view() 함수를 호출
    url(r'^$', views.PostList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)