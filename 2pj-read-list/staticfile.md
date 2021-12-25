# static(정적인,고정)  

- static 파일은 css, js 파일들을 말한다.

- html파일과 css, js파일의 차이점.  
html파일은 정적인 파일이 아니다 왜냐하면 views.py에 정의된 내용에 따라서 html파일의 빈 칸이 채워져 사용자에게 보여지기 때문. ex) realtime data 등등...  
css, js파일들은 html파일과 달리 고정된 내용만 제공하면 되서 templates파일에 같이 넣어놓으면 안되고 특정 url로 접근할 수 있게 설정을 해야한다.

- django에서의 정적 파일을 html파일에 적용 시키는 법.  
1.적용시킬 html파일을 열음.  
2.<.!DOCTYPE html> 바로 아래 {% load static %} 적음.  
3.css파일 적용: head태그안에 <.link rel="stylesheet" href="{% static 'bitcoin.css' %}" media="screen"> 적음.
4.js파일 적용: body태그 안의 맨 밑에 <.script src="{% static 'coin.js' %}"><./script> 적음.  
5.jquery파일 적용: head태그안에 <.script src="{% static 'jquery-3.6.0.min.js' %}"><./script> 적음.