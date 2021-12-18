# 가상환경

- 가상환경 쓰는 이유.
여러개의 프로젝트를 개발할때 모듈간의 충돌을 피하기 위해서.

- 가상환경 만드는 법.
예를 들어 바탕화면에 “my_project”라는 폴더를 만들어 작업을 한다면, 그 폴더 안에서 python -m venv 가상환경이름이라고 쳐주면 된다. 보통 python -m venv venv 로 함.

- 가상환경 실행하기(활성화).
프로젝트 폴더 안에서 가상환경이름\Scripts\activate.bat 이라고 쳐주면 가상환경이 활성화된다.
즉, venv\Scripts\activate.bat

- 현재(가상환경) 설치된 패기지 확인하기.
pip list 입력

- 패키지 설치하는 법.
ex) pip install django.

- 가상환경 비활성화하기.
deactivate 치면 됨.

- 가상환경은 깃으로 버전관리 하지 않는게 좋음.

- 가상환경내에 파이썬 인터프리터가 인식되있는지 확인하는 방법.
where python 치면됨.
결과:
C:\Users\yy123\Desktop\github_repo\Process-creating-web\venv\Scripts\python.exe => 가상환경 내에서 파이썬 인터프리터의 위치.
C:\Users\yy123\AppData\Local\Programs\Python\Python39\python.exe => 시스템 기본 파이썬 인터프리터 위치.