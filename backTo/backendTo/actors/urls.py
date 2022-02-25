from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from actors import views

urlpatterns = [
    path('actors/', views.actor_list),
    path('actors/<int:pk>/', views.actor_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)
