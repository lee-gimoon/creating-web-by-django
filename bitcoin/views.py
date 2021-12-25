# from django.http import HttpResponse

# def index(request):
#    return HttpResponse("Hello world")

from django.shortcuts import render

# Create your views here.

def bitcoin(request):  
    return render(request, 'bitcoin.html')
# reder() 함수는 템플릿에 context 를 채워넣어 표현한 결과를 HttpResponse 객체와 함께 돌려주는 구문의 shortcut.
# render() 함수는 request 객체를 첫번째 인수로 받고, 템플릿 이름을 두번째 인수로 받으며, 
# context 사전형 객체를 세전째 선택적(optional) 인수로 받습니다.

