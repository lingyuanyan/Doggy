from django.conf.urls import url
from django.urls import path
from DoggyApp import views

urlpatterns = [
# Home Page
    path('', views.index, name='index'),
]
