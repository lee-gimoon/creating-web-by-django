# db 관리.

- 데이터베이스 생성하기.
python manage.py migrations 을 해야하지만 장고에는 기본 마이그레이션이 있으므로 
python manage.py mirgrate 하면된다.

- 마이그레이션은 깃으로 버전관리 하지 않는게 좋음.
.gitignore 파일에 migrations/ 추가.

- 관리자 계정 생성하기.
python manage.py createsuperuser.
사용자명(lee), 이메일, 비밀번호는 내가 보통 쓰는 것.