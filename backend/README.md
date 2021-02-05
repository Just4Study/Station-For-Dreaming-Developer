## Backend 실행 방법

~~~
git clone을 한 후 backend 디렉토리에 있다고 가정 (python version : 3.8.5)

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r deploy/requirements.txt

python manage.py makemigrations post account mentor
python manage.py migrate
python manage.py runserver
~~~

