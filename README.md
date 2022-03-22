- 현재 파일 경로: \Users\yy123\Desktop\github_repo\creating-web-by-django\  
/mnt/c/Users/yy123/Desktop/github_repo/creating-web-by-django/(리눅스)

- 장고가 설치된 디렉토리 알아내는 법.  
python -c "import django; print(django.__path__)"

- 파이썬 실행 방법.  
1.*py 파이썬 파일로 실행.  
2.파이썬 쉘 모드에서 실행 => 즉, cmd 창에서 python 치고 라인 단위로 실행.

- 프로젝트 테스트용 웹 서버 실행 코드.  
python manage.py runserver => 개발 상태 확인할 수 있다.
python manage.py runserver 0.0.0.0:8000 => 0.0.0.0은 현재 내 컴퓨터의 IP 주소가 무엇으로 설정되어 있던지 이와는 관계 없이 웹 접속 요청을 받겠다는 뜻.

- wsl2 ubuntu shell에서 현재파일에서 vs code 실행하는 법: code .

# 이 프로젝트만드는 순서.

- 코딩은 프로젝트 뼈대를 만드는 것이 시작이다. 즉, 프로젝트에 필요한 디렉토리 및 파일을 구성하고, 설정 파일을 세팅한다.  
참고로 최상위 디렉토리를 루트 디렉토리라 부른다.

1. 파이썬, 비주얼 스튜디오 코드, 깃과 깃허브 와
Cmder(윈도우 사용자을 위한 터미널 프로그램) 설치 => Cmder을 쓰는 이유는 DOS(cd,dir..)명령어뿐만 아니라 리눅스 명령어도 그대로 사용할 수 있음.
but, 나는 wsl2 씀.

2. 가상환경(pyenv-virtualenv) 실행 후 django 설치.

3. 장고 프로젝트 생성.

4. 데이터베이스 생성하고 관리자 계정도 생성.

5. 앱 만들기.

6. 모델 코딩하기.

7. URLconf 코딩하기.

8. 뷰 코딩하기.

9. 템플릿 코딩하기.

10. 만들어진 웹 앱을 실제 서비스로 제공(배포)하기.

- 개 돼지 투표 롱 vs 숏 4시간 간격 ㄱㄱ. => 폼(form)으로 만들기.  
