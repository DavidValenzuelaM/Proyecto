from django.urls import path
from . import views


urlpatterns = [
    path('index.html', views.index, name='index'),
    path('herramientas.html', views.herramientas, name='herramientas'),
    path('donations.html', views.donations, name='donations'),
    path('maceteros.html', views.maceteros, name='maceteros'),
    path('semillas.html', views.semillas, name='semillas'),
    path('tierra.html', views.tierra, name='tierra')
]
