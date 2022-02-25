from django.urls import path
from actors import views

urlpatterns = [
    path('actors/', views.actor_list),
    path('actors/<int:pk>/', views.actor_detail)
]
