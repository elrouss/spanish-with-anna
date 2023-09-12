FROM python:3.11-slim

WORKDIR /app

COPY ../requirements.txt .

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "bookmarkit.wsgi:application", "--bind", "0:8000" ]