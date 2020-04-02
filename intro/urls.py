from django.urls import path, include

from . import views

urlpatterns = [
	path('intro/', views.index)
]
