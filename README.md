<h1 align="center">Проект: "Español con Anna" 🇪🇸</h1>

<div align="center">
  <img width="600" alt="Главный экран приложения" src="https://github.com/elrouss/spanish-with-anna/assets/108838349/ab898a3b-1f88-4fdf-850a-c0097eb023d9">
</div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории</a></li>
      <li><a href="#establishing">Процесс создания</a></li>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#team">Наша команда</a></li>
      <li><a href="#progress">Статус проекта</a></li>
      <li><a href="#feedback">Обратная связь</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Проект создается по заказу Анны Добкес - известного преподавателя испанского языка в Санкт-Петербурге, переводчика, сертифицированного гида. В конечной реализации он представляет собой приложение с регистрацией и авторизацией пользователей для приобретения онлайн-курсов, занятиями студентов в личном кабинете, заказом услуг перевода и экскурсий. Находится на этапе разработки в 3 ветках: <a href="https://github.com/elrouss/spanish-with-anna/tree/development">development</a>, а также <a href="https://github.com/elrouss/spanish-with-anna/tree/frontend">frontend</a> и <a href="https://github.com/elrouss/spanish-with-anna/tree/backend">backend</a> (подробнее о процессе работы - <a href="#establishing">ниже</a>).

<b>Ссылки на проект</b>
---
**Deploy**
<br>
**Frontend:** *появится позже*
<br>
**Backend:** *появится позже*

<b>Техническое задание:</b> https://docs.google.com/document/d/1ewrKErNPRKoIIg7E7H9IAvaD_E07nrKHrV8pREKWmdA/edit#heading=h.cp9sw0ch9syr
<br>
<b>Макет:</b> https://www.figma.com/file/r3wbGorv7dpmWZiUJS8j09/Spanish-courses_Espanol-con-Anna_ORIGINAL?type=design&node-id=1200-405&mode=dev
<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Иконка 'Next.js'">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Иконка 'Sass (SCSS)'">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="Иконка Django">
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Иконка Docker">
  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Иконка Python">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="Иконка Postman">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Иконка Figma">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории</h2></a>
1. `git clone https://github.com/elrouss/spanish-with-anna.git` - клонировать репозиторий на свое устройство (HTTPS)
2. `git checkout -b development origin/development` - перейти в ветку разработки
3.  **frontend:**
<br> 3. 1 `cd frontend` - перейти в папку frontend
<br> 3. 2 `npm i` - установить зависимости (предварительно проверить наличие Node.js командой `node -v`, а также - NPM командой `npm -v`; в случае необходимости скачать и установить Node.js по этой <a href="https://nodejs.org/en/download">ссылке</a>)
<br> 3. 3 `npm run dev` - запустить приложение и открыть в любом браузере по адресу `http://localhost:3000/`
6. **backend**:
<br> 4. 1 `cd backend` - перейти в папку backend
<br> 4. 2 скачать и установить Python по этой <a href="https://www.python.org/downloads/release/python-3110/">ссылке</a>
<br> 4. 3 `python -m venv venv` (для windows), `python3 -m venv venv` (для linux/macOS) - создать виртуальное окружение
<br> 4. 4 `source venv/Scripts/activate` активировать виртуальное окружение на Windows; `source venv/bin/activate` MacOS/Linux 
<br> 4. 5 `pip install -r requirements.txt` установить зависимости
<br> 4. 6 `cd spanish_with_anna` - перейти в папку spanish_with_anna
<br> 4.7 в папке backend создайте файл `.env` по примеру `example.env`
<br> 4.8 `python manage.py makemigrations` - создать миграции
<br> 4.9 `python manage.py migrate` - применить миграции
<br> 4.9 `python manage.py runserver` - запустить приложение и открыть в любом браузере по адресу `http://127.0.0.1:8000/`
<br> 4.10 `http://127.0.0.1:8000/api/docs/` доступные эндпоинты

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа выполнена в <b>несколько этапов</b> (каждый из них протестирован, выявленные баги - исправлены):
<br>
1. Верстка главной страницы на desktop с интерактивными элементами
2. Верстка форм регистрации, авторизации и обратной связи на десктоп с подключением серверной логики

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>5. Функционал</h2></a>
- Интерактивные элементы:
  - Выпадающее меню
  - Карусель с рандомной генерацией карточек на основе сформированного массива данных
  - Аккордеон

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="team"><h2>6. Наша команда</h2></a>
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><img src="https://github.com/elrouss/spanish-with-anna/assets/108838349/7c7b71cd-e3c8-41ae-b163-63fe21e8f1ba" width="100px;" alt="Наталья Дангаева"/><br/><a href="https://github.com/Natarrada"><sub><b>Наталья Дангаева</b></sub></a><br/><sub>Project Manager</sub><br>💼</td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/108838349?v=4" width="100px;" alt="Борис Зашляпин"/><br /><a href="https://github.com/elrouss"><sub><b>Борис Зашляпин</b></sub></a><br/><sub>TeamLead, Frontend</sub><br />👨‍💻</td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/108974517?v=4" width="100px;" alt="Александр Товченников"/><br /><a href="https://github.com/yryryk"><sub><b>Александр Товченников</b></sub></a><br/><sub>Frontend</sub><br />👨‍💻</td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/105106407?v=44" width="100px;" alt="Константин Филяев"/><br /><a href="https://github.com/uzornakovre"><sub><b>Константин Филяев</b></sub></a><br/><sub>Frontend</sub><br />👨‍💻</td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/81865046?v=4" width="100px;" alt="Светлана Логвинова"/><br /><a href="https://github.com/SunnyInHouse"><sub><b>Светлана Логвинова</b></sub></a><br/><sub>Backend</sub><br />👩‍💻</td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/108136952?v=4" width="100px;" alt="Ольга Мелихова"/><br /><a href="https://github.com/ApriCotBrain"><sub><b>Ольга Мелихова</b></sub></a><br/><sub>Backend</sub><br />👩‍💻</td>
      <td align="center" valign="top" width="14.28%"><img src="https://github.com/elrouss/spanish-with-anna/assets/108838349/2f0351ee-7b5a-465d-95ee-69fb3a7a015a" width="100px;" alt="Кристина Колабышева"/><br /><a href="https://www.behance.net/kristina_kolabysheva"><sub><b>Кристина Колабышева</b></sub></a><br/><sub>UI/UX Designer</sub><br />🎨</td>
    </tr>
    <tr>
    <td align="center" valign="top" width="14.28%"><img src="https://github.com/elrouss/spanish-with-anna/assets/108838349/a6dbd08b-9055-462a-951e-5c54f1dbc61d" width="100px;" alt="Наталья Андреева"/><br /><a href="https://github.com/And0nata"><sub><b>Наталья Андреева</b></sub></a><br/><sub>Tester</sub><br />🐞</td>
    <td align="center" valign="top" width="14.28%"><img src="https://github.com/elrouss/spanish-with-anna/assets/108838349/c3d8201f-ba32-4e3b-bce7-1948b4b86f2b" width="100px" alt="Ксения Абдуллина"/><br /><a href="https://github.com/Abdullina517"><sub><b>Ксения Абдуллина</b></sub></a><br/><sub>Tester</sub><br />🐞</td>
      <td align="center" valign="top" width="14.28%"><img src="https://github.com/elrouss/spanish-with-anna/assets/108838349/999b5fa4-5af0-4335-9e00-ec89e1c63180" width="100px;" alt="Анастасия Пастернак"/><br /><a href="https://github.com/AnastasiaPasternak"><sub><b>Анастасия Пастернак</b></sub></a><br/><sub>Tester</sub><br />🐞</td>
    </tr>
  </tbody>
</table>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>


<a name="progress"><h2>7. Статус проекта</h2></a>
В разработке

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="feedback"><h2>8. Обратная связь</h2></a>
В случае выявления ошибок или предложений по улучшению нашего проекта просим создать <a href="https://github.com/elrouss/spanish-with-anna/issues">здесь</a> заметку с соответствующим тегом. Мы будем крайне признательны за любую обратную связь 🤗

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<div align="center">
  <a href="https://elrouss.movies.nomoredomains.monster/">
    <img width="700" alt="Карусель с отзывами о курсах Анны" src="https://github.com/elrouss/spanish-with-anna/assets/108838349/2bdd825e-1019-493f-9fd3-437559067aaf">
  </a>
</div>
