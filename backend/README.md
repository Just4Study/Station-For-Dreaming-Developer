## Backend 실행 방법

~~~
git clone을 한 후 backend 디렉토리에 있다고 가정 (python version : 3.8.5)

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r deploy/requirements.txt

python manage.py makemigrations post user mentor
python manage.py migrate
python manage.py runserver
~~~


### 모델

~~~
class Mentor(models.Model):
    auto_id = AutoField(primary_key=True)
    name = CharField(max_length=10) # 멘토님 성함
    company = CharField(max_length=20) # 회사
    dev_category = CharField(max_length = 10) # 멘토 개발 분야
    description = CharField(max_length = 30) # 멘토 한 줄 소개
    content = TextField() # 내용
    image = ImageField(upload_to="img") # 이미지 url
~~~

~~~
class Post(models.Model):
    auto_id = AutoField(primary_key=True) 
    title = CharField(max_length=200) #제목
    author = CharField(max_length=20) #작성자
    team_type = CharField(max_length=20) #팀 유형
    region = CharField(max_length= 10) #지역
    end_date = DateField(null = True) #마감날짜
    preference = CharField(max_length=20, blank=True) #우대사항
    dev_category = CharField(max_length = 10) #개발 분야
    comment = TextField() #하고 싶은 말
~~~

~~~
class User(models.Model):
    user_name = CharField(max_length=20) # 이름
    email = EmailField(max_length=30) # 이메일
    password = CharField(max_length=20) # 비밀번호
    school_name = CharField(max_length=20) # 학교 이름
    major = CharField(max_length=20) # 학과
~~~
