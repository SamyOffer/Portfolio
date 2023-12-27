import TodoWebSite from '../assets/projects/TodoWebSite.png'
import Ressourcerie from '../assets/projects/ressourcerie.png'
import WebSitePortfolio from '../assets/projects/WebSitePortfolio.png'
import PomodoroTimer from '../assets/projects/PomodoroTimer.png'
import SneakersShop from '../assets/projects/SneakersShop.png'
import Algorithm from '../assets/projects/Algorithme.png'
import Backup_Project from '../assets/projects/Backup_Project.png'

export const data=[
    {
        id:1,
        name:"Portfolio Web Site",
        image:WebSitePortfolio,
        github:"https://github.com/SamyOffer/Portfolio",
        description:`
My portfolio is a personal web application that I developed using JavaScript with the React framework and applied styles using Tailwind CSS. This project was undertaken independently, outside of my academic commitments, during my free time.
**Technologies Used:**
- JavaScript, React, Tailwind CSS

**Project Duration:**
- Approximately 1 week (free time)

**Work Methods and Results**
- During the development of my portfolio, I adopted an iterative approach. I started by sketching a basic design and gradually added features while refining the user interface. I also used Git to version control my code, facilitating change management and tracking the project's evolution.

**Key Points:**
- **Responsive Design:** The portfolio is fully responsive, ensuring a consistent user experience across different devices.
- **Use of Tailwind CSS:** I deepened my skills using Tailwind CSS to simplify the styling process.
- **Projects Section:** I included a dedicated section for my projects, featuring images, links to source code, and concise descriptions.

**Skills Acquired:**
- **Mastery of React:** I solidified my understanding of React by building a complete site with multiple interacting components.
- **Effective Use of Tailwind CSS:** I learned to use Tailwind CSS efficiently to simplify and expedite the styling process.
- **Individual Project Management:** Working alone on this project improved my project management skills, from initial planning to the final iteration.
`        
    },
    {
        id:2,
        name:"Ressourcerie Web Site",
        image:Ressourcerie,
        github:"https://github.com/SamyOffer/Ressourcerie",
        description:`
The "ressourcerie" project is one that I carried out with 4 other people. This project was done during the 2nd semester of my 2nd year of computer science. The project took 3 months to complete and was carried out using a three-tier architecture. 
**Technologies Used:**
- JavaScript , Java, Html, Css

**Project Duration:**
- 3 months

**Work Methods and Results**
- The project was implemented using a three-tier architecture, aimed at clearly separating the data layer, the business layer and the user interface layer.
- **Data Layer:** This layer is dedicated to data management, be it the database containing information on items for sale, or other data relevant to the operation of the application.
- **Business layer :** The business layer manages the application's logic. This is where functionalities such as adding and deleting items are implemented.
- **User Interface:** This layer is the interface through which users interact with the application. It allows users to view items for sale and use the available functionalities.
- Each implemented feature has been rigorously tested to ensure that it works properly.
- Unit tests and integration tests were carried out to validate the different parts of the application. Requests were also tested to guarantee the reliability and security of the application.
- The result is verry good, and the customer was very happy with the work we did.

**Skills Acquired:**
- Project carried out in a group of 5, so I was able to work as part of a team, and we carried out several Sprint projects. 
- I learned to work in a team

`
    },
    {
        id:3,
        name:"ToDo",
        image:TodoWebSite,
        github:"https://github.com/e-vinci/web2-2022-project-group-14",
        description:`
The "ToDo" project is a task management application designed to assist users in achieving their goals. 
I implement this project with 3 other people.
Users can log in or register to access the platform. Once registered, they can start adding tasks to their to-do list, 
assigning difficulty levels to each task. 
The application incorporates a gamified aspect where users create a combatant character at registration, 
possessing health points (HP), attack points, and a level, starting at level 1. Completing tasks earns users experience 
points (XP) and HP, allowing them to combat enemies listed in a dropdown menu. 

**Technologies Used:**
- JavaScript, Node.js, Bootstrap, Eslint, Prettier

**Project Duration:**
- 2 months

**Work Methods and Results**
- We used a REST API to manage the data.
- Bcrypt to encrypt the passwords.
- MVC architecture. 
`

    },
    {
        id:4,
        name:"Pomodoro Timer",
        image:PomodoroTimer,
        github:"https://github.com/SamyOffer/Pomodoro-react-app",
        description:`
This solo project involved the development of a Pomodoro Timer application using React. The Pomodoro Technique is a time management method that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. The application allows users to customize these intervals based on their preferences, enhancing productivity and time management.

**Technologies Used:**
- React, JavaScript, HTML, CSS

**Project Duration**
- The project spanned a total of 3 days and was completed during my free time. The primary objective was to grasp the fundamentals of React while simultaneously creating a functional Pomodoro Timer.

**Work Methods and Results**

- During the development of the Pomodoro Timer, I adopted a hands-on approach to learning React. The process began with understanding the basics of React components, state management, and lifecycle methods. As the project progressed, I implemented features such as timer functionality, customizable work intervals, and break periods. Additionally, I focused on creating an intuitive user interface for seamless user interaction.

**Key Points:**

* **React Fundamentals:** Gain proficiency in React by building components and managing state.
* **Timer Functionality:** Implement a fully functional Pomodoro Timer with customizable work and break intervals.
* **User Interface Design:** Create an intuitive and user-friendly interface for a seamless user experience.

**Skills Acquired**

- Through the development of the Pomodoro Timer React Application, I acquired several valuable skills:

* **React Fundamentals:** Solidify the foundational concepts of React, including components, state, and props.
* **State Management:** Learn effective state management within a React application.
* **Functional Components:** Understand and implement functional components in React.
* **UI/UX Design:** Enhance skills in designing an intuitive user interface for improved user experience.


`

    },
    {
        id:5,
        name:"Sneaker's Shop",
        image:SneakersShop,
        github:"https://github.com/SamyOffer/sneakers_shop",
        description:`- Loading...`

    },
    {
        id:6,
        name:"Algorithm Project",
        image:Algorithm,
        github:"https://github.com/SamyOffer/Projet_Djikstra_BFS_DFS",
        description:`
The aim of this Java project was to find the shortest and fastest paths between different points in a graph. \n
To achieve this goal, I implemented the Dijkstra and BFS (Breadth-first search) / DFS (Depth-First Search) algorithms.

**Technologies Used:**
- Java

**Project Duration**
- It took me 2 weeks to complete this project.

**Work Methods and Results**
- Implemented Dijkstra and BFS/DFS algorithms for finding shortest and fastest paths in a graph.

**Skills Acquired**

* Utilized Dijkstra and BFS/DFS algorithms for finding the shortest and fastest paths
* Java programming
   

`
    },
    {
        id:7,
        name:"Backup Project",
        image:Backup_Project,
        github:"https://github.com/SamyOffer/TD-Cloud-Sauvegarde-Client",
        description:`
This application has been developed to simplify the file backup process by allowing the user to specify file extensions to be backed up in 
addition to the basic ones: "txt, pdf, jpg, jpeg, png, docx, xlsx, mp3, mp4, html". 
Files are XOR-encrypted on the client side before being sent to the server. 
The client also decrypts the data when it retrieves it from the server.

**Technologies Used:**
- Java, JavaFX

**Project Duration**
- It took me 2 weeks to complete this project with my teammates.

**Work Methods and Results**
- Implemented Client/Server architecture. We used JavaFX to make a GUI for the client side.
- Implemented XOR encryption/decryption algorithm.

**Skills Acquired**

* XOR encryption/decryption algorithm
* Client/Server architecture
* JavaFX GUI development 

`
    }
]