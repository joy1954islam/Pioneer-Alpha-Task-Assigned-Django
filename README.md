# Pioneer-Alpha-Task-Assigned-Django

## Getting Started

To run the application on your local machine, follow these steps:

### Clone the repository: <br>
`git clone https://github.com/joy1954islam/Pioneer-Alpha-Task-Assigned-Django.git`

### Install dependencies:

- Frontend:
  ```
  cd Pioneer-Alpha-Task-Assigned-Django/frontend
  npm install
  ```

- Backend: create virtual environment
  ```
  cd Pioneer-Alpha-Task-Assigned-Django
  python -m virtualenv venv

  ```
 - Backend: Create a virtual environment to install dependencies in and activate it:
  ```
    For Windows:
    $ venv\Scripts\activate
    For Linux:
    source env/bin/activate
  ```

- Backend: Then install the dependencies:
  ```
    pip install -r requirements.txt
  ```
  
- Backend: Set up the database:
  ```
  python manage.py makemigrations
  python manage.py migrate
  ```


### Start the application:

- Frontend:
  ```
  cd Pioneer-Alpha-Task-Assigned-Django/frontend
  npm start
  ```

  The frontend application will be accessible at http://localhost:3000.

- Backend:
  ```
  cd Pioneer-Alpha-Task-Assigned-Django
  python manage.py runserver 0.0.0.0:8000
  ```