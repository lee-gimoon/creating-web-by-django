# CGI(Common Gateway Interface)
1
- CGI 란? 각기 다른 프로그래밍 언어가 사용되어 "공통적인 형태"로 주고받기 위해 만든 규약(specification)입니다.  
다시 말해 여러 언어 사용자들의 다양한 요청을 이해할 수 있도록 이를 공통된 규칙으로 변환하는 관문 역할을 하는 것입니다.

- CGI 규격이 생긴 배경.  
독립적인 프로그램(프로세스) = 애플리케이션과 웹 서버 사이에 데이터를 주고받기 위해 규칙을 정했는데 그 규칙을 정의한 것이 CGI 규격(규약).  
But, 기술적 한계 때문에 현재는 거의 사용하지 않음.

- 웹 애플리케이션 서버의 등장으로 CGI 기술적 한계 해결.  
웹 서버 <--> 웹 애플리케이션 서버와 통신을 함으로 해결.

- 사용자의 요청 발생시 응답의 흐름: client(웹 브라우저) (Frontend area) | <==> web server <==> was <==> database  (Backend area) | 

- 어떤 컴퓨터가 서버 역할을 하도록 하는(도와주는) 소프트웨어를 무슨무슨 서버라고 한다. 또한, '웹' 서버를 만들도록 도와주는 대표적인 소프트웨어가 Nginx, Apache. 즉, 웹 서버 = 소프트웨어.

- 웹 서버(Nginx): 주로 정적 파일(page)을 처리를 함(외부에서(클라이언트) 이 정적 폴더에 접근 가능하도록 허용). => 즉, 클라이언트가 웹 사이트에 접속하면 정적 파일을 받아서 볼 수 있는거임.
- Static file(page): image, html, css, javascript 파일과 같이 컴퓨터에 미리 저장되어 있는 파일들을 의미한다. 

- 웹 서버 기능.  
기능 1: 정적인 컨텐츠 제공 => WAS를 거치지 않고, 바로 요청한 컨텐츠를 제공할 수 있다.  
기능 2: 동적인 컨텐츠 제공을 위한 요청 전달 => 요청을 WAS에 보내고, WAS가 처리한 결과를 클라이언트에게 전달한다.  


- 웹 애플리케이션 서버(WAS): 주로 동적 파일(page)을 처리(가공)를 하며 데이터 베이스와 통신함. 
- Dynamic file(page): 데이터베이스, 서버 내 로직 등을 활용해 만들어진 컨텐츠를 반환한다. 

- 웹 서버와 웹 애플리케이션 서버로 나눈 이유: 자원 이용의 효율성 및 장애 극복, 배포 및 유지보수의 편의성을 위해 Web Server, WAS를 각기 사용한다.

- Nginx 장점들(사용 이유): 빠르다, 리버스 프록시로 사용 가능, SSL 지원, 웹페이지 접근 인증, 압축, 비동기 처리

# WSGI(Web Server Gateway Interface)

- WSGI는 CGI(Common Gateway Interface)의 일종.

- WSGI 규격이 생긴 배경.  
웹 서버에서 파이썬 애플리케이션을 실행하고자 생김. 파이썬 애플리케이션을 실행하고자 하는 웹 서버는 이 규격을 지켜야됨.  
또한 웹 CGI 기술의 단점을 개선하고 파이썬 언어에 맞게 재구성.  

- WSGI는 웹 서버와 웹 애플리케이션을 연결 해주는 규격. WAS 이미지 파일 참조.

- django는 웹 애플리케이션 프레임워크이다. 즉, 웹 애플리케이션을 만들때 도움을 주는 소프트웨어.

- WSGI 서버의 이점.
WSGI 규격을 준수하는 WSGI 어떠 서버에서도 파이썬 애플리케이션을 실행할 수 있다.  
ex) 장고로 웹 애플리케이션을 작성하면, 이 애플리케이션은 Apache 웹 서버 or Nginx 웹 서버에서 실행 가능.   
But, Apache나 Nginx는 WSGI 처리 기능이 없어서 이런 웹 서버와 파이썬 웹 애플리케이션 중간에서 WSGI 통신 규격을 처리해주는 mod_wsgi, uWSGI, Gunicorn 등 WSGI 서버를 같이 사용해야 파이썬 애플리케이션을 작동시킬 수 있음.  
참고로 mod_wsgi, uWSGI, Gunicorn는 웹 서버와 앱플리케이션 중간에 위치한다고 해서, 미들웨어라고도 부름.

- WSGI 서버의 애플리케이션 처리 과정.  
1.Request (client -> 웹 서버)  
2.Request의 URL 분석 (웹 서버 area)    
3.WSGIScriptAlias에 정의된 URL이면, WSGI 서버에 처리 위임(웹 서버 area)  
4.파라미터 전달 (웹 서버 -> WSGI 서버)  
5.WSGIScriptAlias에 정의된 wsgi.py 실행 (WSGI 서버 area)  
6.application(environ, start_response) 함수 호출 (WSGI 서버 area)  
7.call (WSGI 서버 -> application)  
8.environ 환경변수 처리 (application area)  
9.뷰 처리, HTTPRequest 객체 생성 (application area)  
10.start_response() 함수 호출 (application area)  
11.return HTTPResponse (application area)  
12.return  (application -> WSGI 서버)  
13.표준 출력(stdout)에 결과 출력 (WSGI 서버 area)  
14.처리 결과 (WSGI 서버 -> 웹 서버)  
15.Response (웹 서버 -> client)

- WSGI 규격에 따라 애플리케이션을 개발할 때 중요한 사항 3가지.  
첫 번쨰: 개발이 필요한 애플리케이션을 함수 또는 클래스의 메소드로 정의하고, 애플리케이션 함수의 인자는 다음과 같이 정의한다.  
def application(envrion, start_response):  
두 번째: start_response 함수의 인자 역시 다음과 같이 정해져 있으므로 그대로 따른다.  
start_response(status, headers)  
세 번째: 애플리케이션 함수의 리턴값은 응답 바디에 해당하는 내용으로, 리스트나 제너레이터와 같은 iterable 타입이어야 한다.