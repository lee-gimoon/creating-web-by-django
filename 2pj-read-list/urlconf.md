# URLconf(URL configuration)

- URLconf 정의.  
urls.py 파일에 URL과 처리 함수(view)를 매핑하는 파이썬 코드를 작성하는데 이러한 URL/뷰 매핑을 URLconf라 함.  
ex) path('url주소', 처리함수(view.*)) 이런식으로 매핑.

- 장고에서의 URL.  
클라이언트로부터 요청을 받으면 장고는 가장 먼저 요청에 들어있는 URL을 분석함.  
즉, 요청에 들어있는 URL이 urls.py 파일에 정의된 URL 패턴과 매칭되는지를 분석함.

- 장고에서 URL을 분석하는 순서.  
1.setting.py  파일의 ROOT_URLCONF 항목을 읽어 최상위 URLconf(urls.py)의 위치를 알아냄.  
2.URLconf를 로딩하여 urlpatterns 변수에 지정되어 있는 URL 리스트를 검사함.  
3.위에서부터 순서대로 URL 리스트의 내용을 검사하면서 URL 패턴이 매치되면 검사를 종료함.    
4.매치된 URL의 뷰를 호출한다. 여기서 뷰는 함수 또는 클래스의 메소드입니다. 호출 시 HttpRequest 객체와 그리고, 매칭할 때 추출된 단어들을 뷰에 인자로 넘겨줍니다.  
5.URL 리스트를 끝까지 검사했는데도 매칭에 실패하면 에러를 처리하는 뷰를 호출한다.

- path() 함수.  
route, view 2개의 필수 인자와 kwargs, name 2개의 선택 인자를 받는다.  
route: url 패턴을 표현하는 문자열.  
view: url 문자열이 매칭되면 호출되는 뷰 함수. HttpRequest 객체와 URL 스트링에서 추출된 항목이 뷰 함수의 인자로 전달됨.  
kwargs: url 문자열에서 추출된 항목 외에 추가적인 인자를 뷰 함수에 전달할 때, 파이썬 사전 타입으로 인자를 정의함.  
name: 각 url 패턴별로 이름을 붙여줌. 여기서 상용되는 이름은 주로 템플릿 파일에서 사용된다.