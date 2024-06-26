from django.shortcuts import render

def index(request):
    return render(request, 'jardineria/index.html')

def herramientas(request):
    return render(request, 'jardineria/herramientas.html')

def maceteros(request):
    return render(request, 'jardineria/maceteros.html')

def donations(request):
    return render(request, 'jardineria/donations.html')

def semillas(request):
    return render(request, 'jardineria/semillas.html')

def tierra(request):
    return render(request, 'jardineria/tierra.html')