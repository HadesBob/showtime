from django.shortcuts import render

def index(request):
	return render(request, 'index.html')


def slider(request):
	return render(request, 'slider.html')