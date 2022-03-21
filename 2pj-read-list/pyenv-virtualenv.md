# linux에서 파이썬 버전관리와 가상환경을 위한 tool사용법.

# pyenv 설치 및 사용법.

- 1.pyenv설치하기전 사전에 필요한 라이브러리 설치.  
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev
 
- 2.pyenv git 가져오기(즉, pyenv설치 파일 가져오기)  
git clone https://github.com/pyenv/pyenv.git ~/.pyenv

- 3.환경설정(pyenv 각종 환경설정 및 pyenv global 명령 적용시키기 위한 환경설정).  
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

- 4.python 설치 가능한 버전 확인.  
pyenv install --list

- 5.pyenv 버젼 설치.  
pyenv install 3.8.3

- 6.설치된 pyenv versions 확인.  
pyenv versions

- 7.현재 사용자의 전역 Python 버전  
pyenv global 3.8.3

- 8.변경된 python version 확인  
python --version

- 9.특정 디렉토리에서의 파이썬 버전 지정. 특정 디렉토리에 진입해서 python 관련 명령을 실행하면 local로 지정된 파이썬 인스턴스가 실행된다.  
cd newproject 이 위치로 이동해서
pyenv local 3.8.3 명령어 입력하면 이 디렉토리에서는 python 3.8.3버젼이 작동됨.

# virtualenv 설치 및 사용법.

- 1.virtualenv 설치
git clone https://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv

- 2.가상환경 생성및 특정 python 버전 지정.
pyenv virtualenv 3.8.3 [생성할 가상환경 이름]

- 3.가상환경 목록.  
pyenv virtualenvs 

- 4.만든 가상환경을 특정 폴더에 지정.  
cd bitcoin-project  
pyenv local [가상환경 이름]

- 5.가상환경 활성화.  
pyenv activate [가상환경 이름]

- 6.가상환경 비활성화.
pyenv deactivate

- 7.가상환경 삭제.
pyenv uninstall [가상환경 이름]