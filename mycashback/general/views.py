from django.shortcuts import render, redirect



def index(request):
    
    context = {
        'title':'Ana Səhifə - MyCashBack.az',
    }
    return render(request, 'index.html', context)




def about_us(request):
    context = {
        'title': 'About Us',
    }
    return render(request, 'about-us.html', context=context)
