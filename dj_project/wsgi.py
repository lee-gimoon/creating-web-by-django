"""
WSGI config for dj_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# 프로젝트의 애플리케이션 설정 정보 로딩 작업 과정.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dj_project.settings') 

# 웹 서버가 이 application 객체를 호출하여 장고의 애플리케이션을 실행함.
# 즉, WAS 서버(웹 애플리케이션 서버)가 wsgi.py 파일에서 WSGIHandler 객체를 호출하여 최종 응답을 웹 서버에 전달.
application = get_wsgi_application() 

# def get_wsgi_applicaition(): 
#     return WSGIHandler() WSGIHandler()는 장고 내부 클래스.