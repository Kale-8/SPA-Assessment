# Event Management System

A Single Page Application (SPA) for managing events and event enrollments. Built with vanilla JavaScript, this application provides different functionalities for administrators and visitors.

## 🚀 Features

### For Administrators
- Create, edit, and delete events
- View all events and their capacity
- Manage event details including name, description, date, and capacity

### For Visitors
- View available events
- Enroll in events
- View personal enrollments
- Automatic capacity management
- Visual feedback for sold-out events

## 💻 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Backend**: JSON Server
- **Package Manager**: npm
- **HTTP Client**: Axios
- **Development Server**: Vite
- **Dependencies**:
  - axios: ^1.10.0
  - vite: ^7.0.4
  - concurrently: ^9.2.0
  - json-server: ^1.0.0-beta.3

## 🛠️ Installation

1. Clone the repository:
```
bash git clone [repository-url]
``` 

2. Install dependencies:
```
bash npm install
``` 

3. Start the development server and JSON server:
```
bash npm run start
``` 

## 🔑 Authentication

The system includes two types of users:
- **Admin**: Can manage events
- **Visitor**: Can view and enroll in events

Default admin credentials:
- Email: test-admin@riwi.io
- Password: 1234

Default visitor credentials:
- Email: test@riwi.io
- Password: 1234

## 📁 Project Structure
```
project-root/ ├── src/ │ ├── js/ │ │ ├── components/ │ │ ├── services/ │ │ ├── views/ │ │ ├── main.js │ │ └── router.js │ └── css/ │ └── style.css ├── db.json └── package.json
``` 

## 🔄 API Endpoints

The application uses JSON Server with the following endpoints:

- `GET /events`: Retrieve all events
- `POST /events`: Create a new event
- `PUT /events/:id`: Update an event
- `DELETE /events/:id`: Delete an event
- `GET /enrollments`: Get all enrollments
- `POST /enrollments`: Create new enrollment

## 🎯 Core Functionality

- **Event Management**: Full CRUD operations for administrators
- **Enrollment System**: 
  - One enrollment per user per event
  - Automatic capacity tracking
  - Visual feedback for enrollment status
- **Responsive Design**: Works on both desktop and mobile devices
- **Real-time Updates**: Immediate UI updates after actions

## 🔒 Security Features

- Route protection based on user roles
- Session management using localStorage
- Protected admin routes and functions

## 🌟 Usage

1. Login with your credentials
2. Admins can manage events using the dashboard
3. Visitors can:
   - Browse available events
   - Enroll in events with available capacity
   - View their enrollments in the "My Enrollments" section

# Author
- Name: Kaled Mesa ;)
- Email: kaled.geme2@gmail.com
- Clan: Gosling
- CC: 1000089021
