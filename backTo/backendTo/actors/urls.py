from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from actors import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('actors/', views.actor_list),
    path('actors/<int:pk>/', views.actor_detail)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
