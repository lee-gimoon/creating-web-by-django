# 관리자 사이트  

- 장고의 Admin 사이트.  
장고의 Admin 사이트는 데이터베이스에 들어있는 데이터를 쉽게 관리할 수 있도록 데이터의 생성, 조회, 변경, 삭제 등의 기능을 제공한다.

- 관리자 계정 생성하기.
python manage.py createsuperuser.
사용자명(lee), 이메일, 비밀번호는 내가 보통 쓰는 것.

- 기본 테이블인 Users, Groups.  
이게 있는 이유는 settings.py 파일에 django.contrib.auth 애플리케이션이 등록되어 있기 때문.

- Admin 사이트에 테이블 반영.  
admin.py 파일에 admin.site.register(테이블명) 적으면 됨.