from django.shortcuts import render


def main_page(request):
    """This function handels requests to the main page"""
    return render(request, 'wordle/main_page.html')
