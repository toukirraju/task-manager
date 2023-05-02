
# Task Manager App




[![version](https://img.shields.io/badge/version-1.0-green)]()
## Table of contents
* [Description](#description)
* [Features](#features)
* [Demo](#demo)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Links](#links)

## Description 
A task manager application built using React, Redux, and RTK Query. The app allows users to create, view, update, and delete tasks. The Redux store is used to manage the app state, while RTK Query is used to handle API calls and caching.

## Features


* When hitting the '/projects' and '/team' routes on o server, then it shows project list and team list from the server and display them on the UI according to the template.

* When displaying the Project List,  each project can be checked and unchecked. 


* Only the projects that have been selected/checked from the sidebar should be displayed among the tasks. 

* Each task has a select box that, when selected, changes the status of the task according to the selection. It is essential to sync with the server here. This means that the status change will occur on both the UI and server.

* When click on the delete icon on each task, the task will be deleted. In the case of task deletion, it will be work in an optimistic way. This means that when the delete button is pressed, the task will be deleted from the UI, and if the delete request fails for any reason, it will undo and reappear in the UI.

* The Delete button will be on the UI only when a task is completed, i.e., the task status is "Complete."

* When click on the Add New button, it will route to the task creation page, and  create a new task by providing the necessary information there. When the task is created, then update the task list or the cache of the task list in a pessimistic way.

* When adding a task, the options for selecting the team and project will need to be fetched from the server (it already received query hooks for this in requirement 1, and we can use them). When the task is added, it will redirect to the homepage.

* When  click on the Edit button on each task, it will take to the task edit page, and  edit the task that was clicked. After editing, the page will redirect to the homepage, and the edited task will be updated.

* The Edit button will not be visible in the UI when a task is in a completed state.

* The search box in the Navbar functional. It should be possible to search for a task by its name or title in the search box. 
## Demo


[![Live Preview](https://img.shields.io/badge/Live%20Preview-g?style=for-the-badge&logoColor=white)](https://taskmanager-tar.netlify.app/)



## Screenshots
#### Home page
![tasks](https://res.cloudinary.com/dzia9ksjr/image/upload/v1683011305/task-manager/home_jhj0e7.png)
#### Add Task
![add](https://res.cloudinary.com/dzia9ksjr/image/upload/v1683011304/task-manager/create_task_zcebtw.png)
#### Edit Task
![edit](https://res.cloudinary.com/dzia9ksjr/image/upload/v1683011304/task-manager/edit_task_ag39mx.png)

## Technologies

**Client:** HTML, CSS, React, Redux, React-redux, RTK Query



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://toukirraju.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/toukir-raju)
[![facebook](https://img.shields.io/badge/facebook-1DA1F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/toukirraju007/)


![Logo](https://res.cloudinary.com/dzia9ksjr/image/upload/v1679146813/Scoreboard%20app/Logos/TR_aozmc6.png)


## Feedback

If you have any feedback, please reach out to us at toukirraju@gmail.com

