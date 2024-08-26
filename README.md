# React To-Do Application

A simple To-Do application built with React, Vite, Axios, and Material-UI. This
application allows users to create, read, update, and delete tasks.

## Features

- List all tasks
- Create a new task
- Update existing tasks
- Delete tasks
- Mark tasks as completed or incomplete

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env` file in the root directory with the following content:**

   ```env
   VITE_API_URL=https://express-todo-test.onrender.com/tasks
   ```

### Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Here's a basic README.md file for your React To-Do application using Vite, Axios, and Material-UI. This file includes sections for project setup, usage, and additional notes.

markdown
Копіювати код
# React To-Do Application

A simple To-Do application built with React, Vite, Axios, and Material-UI. This application allows users to create, read, update, and delete tasks. 

## Features

- List all tasks
- Create a new task
- Update existing tasks
- Delete tasks
- Mark tasks as completed or incomplete

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/react-todo-app.git
    cd react-todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Create a `.env` file in the root directory with the following content:**

    ```env
    VITE_API_URL=https://express-todo-test.onrender.com/tasks
    ```

### Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```
This will start a development server and open the application in your default web browser. The app will automatically reload if you make changes to the source code.

Build
To create a production build of the application, run:

```bash

npm run build
# or
yarn build
```
The production build will be generated in the dist directory.

Usage
Create a Task: Fill in the title and description fields in the form and click "Add Task".
Update a Task: Click "Mark as Completed" or "Mark as Incomplete" to toggle the completion status of a task.
Delete a Task: Click "Delete" to remove a task from the list.
Components
App: Main component that fetches tasks from the API and handles task CRUD operations.
TaskForm: Component for creating new tasks.

## API Endpoints
### GET /: Retrieve all tasks
### POST /: Create a new task
### GET /:id: Retrieve a task by ID
### PUT /:id: Update a task by ID
### DELETE /:id: Delete a task by ID

## Contributing
Feel free to open issues or submit pull requests if you want to contribute to this project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

