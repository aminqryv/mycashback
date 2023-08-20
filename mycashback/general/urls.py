from django.urls import path, include
from . import views
from django.conf.urls.i18n import i18n_patterns



urlpatterns = [
    path('haqqimizda/', views.about_us, name='haqqimizda'),
]