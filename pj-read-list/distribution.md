# 장고앱 실제 서비스화(배포).

- 서비스화.  
장고를 사용하여 만든 웹 애플리케이션을 개발한 후 이를 실제 서비스화 하기 위해서는 만든 웹 앱을 운영 환경에 배포하고 실행해야 한다.  
즉, 개발은 윈도우 OS에서 개발하고, 운영은 리눅스 운영 서버에서 함.

- 서비스화 하기 위한 설정.  
개발 환경에서 운영 환경으로 옮겨가기 위해서는 개발 시 지정했던 설정 사항을 변경해야 함.  
운영 환경의 웹 서버에서도 개발한 앱이 인식되기 위해서는 설정 사항을 변경해야 함.

- wsgi.py 파일.  
이 모듈은 장고와 웹 서버를 연결하는데 필요한 파일.

- 운영 서버 적용 위해 변경할 설정들.  
1.보안 => secret_key 재 설정, 디버그 모드 끄기, 캐시 서버와 DB 서버에 외부인이 액세스 하지 못하도록 웹 서버나 WAS 서버로 제한해야함.
2.성능 => 웸 서버 프로세스의 소유자 권한으로 DB파일들을 액세스할 수 있도록 settings 모듈인 DATABASES 항목의 NAME 속성값의 경로를 db/db.sqlite3로 변경해햐함.

- 운영 서버를 위해 설정 변경 순서.  
1.settings.py 파일의 DEBUG 변경.  
2.settings.py 파일의 ALLOWED_HOSTS 변경.  
3.settings.py 파일의 STATIC_ROOT 추가.  
4.collectstatic 명령 실행 (가상 환경에서 실행 해야함).  
5.vi www_dir/secret_key.txt 파일 생성 및 SECRET_KEY 저장.  
6.settings.py 파일의 SECRET_KEY 변경.  
7.db.sqlite3 파일의 위치 및 권한 변경.  
8.로그 파일의 권한 변경.

- 운영 서버를 위해 웹 서버와 웹 애플리케이션 서버.  
아파치서버와 mod_wsgi 서버의 관계 => 자센한건 나중에 ~

- 운영 서버에 배포한 후 설정 파일 확인하는 명령어.  
python manage.py check --deploy  

- DJANGO에서 운영 서버 설정 확인 사항 문서.  
https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

