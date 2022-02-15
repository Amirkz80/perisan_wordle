from django.urls import include, path
from . import views


app_name = 'wordle'

urlpatterns = [

    path('', views.main_page, name='main_page'),

]
