# Together_project

Project: Together*Project
Together is a an enhancement platform design to bring the important task of a group on Camerounian in America out of the Social media conversation flow(Whatsapp for now)
This project can be use to
.._ Search a specific user on the platform
.._ Message a specific user
.._ publish and(or) promote a bussiness
.._ organize projects
.._ get an inventory of the platform
.._ Get some statistic

---

## Technologies

This project use Django(python) for backend and React(Javascript) for frontend

## npm test

Most of the tests in this project wait for content to load via the API before continuing the test. Before the implementation is complete, the content never loads so the test fails with a timeout. As a result, the tests will initially run slowly. It may take perhaps a minute or more for all the tests run. The tests will speed up as the implementation nears completion.

## run the application

You can run the application using the following command:
npm start && python manage.py runserver

-This repository content a folder for the backend '**backTo**' and the frontend '**frontTo**'

### Step to reproduce to run the project

1. Clone the repository and open it on your favorite editor. Open the terminal on the folder
2. move to the '**backTo**' directory using the command _cd backTo_
3. Install the dependencies using pipenv or you favorite environment management:
   run the command _pipenv install_ (This will create a pipfile and install the dependency for Django to run)
   If you don't have pipenv installed, you can use this follow this link to install it: [pipenv configuration](https://www.jetbrains.com/help/pycharm/pipenv.html)
4. Activate the environment and start the project:
   _pipenv shell_, will activate the environment
   _cd backendTo && python manage.py runserver_, will start the project
5. Move to the '**frontTo**' directory using the command _cd .. && cd frontTo_
6. Install the dependencies for the project:
   _npm install_ or _yarn install_, will install the neccesaries packages from the package.json
   _npm start_, will start the project on 'http://localhost:3000'
