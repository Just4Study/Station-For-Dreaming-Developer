## Backend 실행 방법

Python3 Version : 3.8.5

~~~
git clone을 한 후 backend 디렉토리에 있다고 가정

python -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r deploy/requirements.txt


python manage.py migrate
python manage.py runserver
~~~

