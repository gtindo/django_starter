migrate:
	python manage.py migrate

install:
	pip3 install -r requirements.txt

run:
	python manage.py runserver 0.0.0.0:8000

lint:
	mypy .

start:
	make install && make migrate && make run