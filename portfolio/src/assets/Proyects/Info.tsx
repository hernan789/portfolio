// import login from "../Proyects/Images/FastDelivery/login.png";
import deliveryDrivers from "../Proyects/Images/FastDelivery/DeliveryDrivers.png";
import map from "../Proyects/Images/FastDelivery/Map.png";
import profile from "../Proyects/Images/FastDelivery/Profile.png";
import register from "../Proyects/Images/FastDelivery/Register.png";
import admin from "../Proyects/Images/FastDelivery/Admin.png";
import LoginImage from "../Proyects/Images/FastDelivery/LoginImage.png";
import NewPackage from "../Proyects/Images/FastDelivery/newpackage.png";
import Login from "../Proyects/Images/MiTurnoWeb/LoginGalaxy.png";
import Register from "../Proyects/Images/MiTurnoWeb/RegisterIpad.png";
import SuccessfullRegister from "../Proyects/Images/MiTurnoWeb/SuccessfullRegister.png";
import Scheduling from "../Proyects/Images/MiTurnoWeb/metrics.png";
import front from "../Proyects/Images/MiTurnoWeb/front.png";
import demo from "../Proyects/Images/MiTurnoWeb/Demo.png";
import frontMac from "../Proyects/Images/TMDB/frontMac.png";
import front1 from "../Proyects/Images/TMDB/front.png";
import loginCel from "../Proyects/Images/TMDB/LoginCel.png";
import loginPad from "../Proyects/Images/TMDB/LoginIpad.png";
import colorgame from "../Proyects/Images/Training/colorgame.png";
import colorgameIphone from "../Proyects/Images/Training/colorgameIphone.png";
import weather from "../Proyects/Images/Training/weather.png";
import todolist from "../Proyects/Images/Training/todolist.png";
interface ProjectInfo {
  name: string;
  path: string;
  path2: string;
  path3: string;
  path4: string;
  path5: string;
  path6: string;
  path7?: string;
  displayName: string;
  description: string;
  detail1: string;
  detail2: string;
  detail3: string;
  link1: string;
  link2: string;
}
export const projectsInfo: ProjectInfo[] = [
  {
    name: "Fast Delivery",
    path: LoginImage,
    path2: deliveryDrivers,
    path3: map,
    path4: profile,
    path5: NewPackage,
    path6: admin,
    displayName: "fast",
    description:
      "Application for last-mile logistics companies. It allows monitoring shipments from the administrator role and includes an interface for delivery drivers, where they can select packages and control the status of their account. ",
    detail1: "I worked on both the front end and the back end. ",
    detail2:
      "Technologies: Typescript, Next.js, Tailwind CSS, Jest, Postman, Express, Docker, Sequelize, PostgreSQL, S3, AWS.",
    detail3: "2024",
    link1: "xxxx",
    link2: "xxxx",
  },
  {
    name: "Mi Turno Web",
    path: front,

    path2: Login,
    path3: Register,
    path4: SuccessfullRegister,
    path5: Scheduling,
    path6: Register,
    path7: demo,
    displayName: "turno",
    description:
      "This group project entailed developing a web application designed to offer companies a platform for their customers to schedule appointments. It included three distinct interfaces tailored for administrators, branch managers, and clients. The client interface granted access to a calendar displaying available dates and schedules for booking.",
    detail1: "I worked on both the front end and the back end.",
    detail2:
      "We used the SCRUM methodology and presented our progress weekly in front of a jury. We utilized Discord, Figma, Trello and Github.",
    detail3:
      "Technologies: PostgreSQL, Sequelize, Node.js, Sass, Material UI, Express.js, Postman, React.js, and Redux.",
    link1: "https://github.com/BorisManzano/mi-turno-web-front",
    link2: "https://github.com/bautistagorchs/mi-turno-web-back",
  },
  {
    name: "Aleph Movie Data Base",
    path: front1,

    path2: frontMac,
    path3: loginCel,
    path4: loginPad,
    path5: register,
    path6: admin,
    displayName: "tmdb",
    description:
      "In this individual project, I created an application that utilizes an online database of movies and allows the user to search for information about a particular film or series, while also enabling them to save their favorites in a separate section. ",
    detail1:
      "I used PostgreSQL, Sequelize, Node.js, and Express on the backend, and React, Bootstrap, and Redux on the frontend.",
    detail2: "xxxx",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
  {
    name: "Training projects",
    path: colorgame,

    path2: colorgameIphone,
    path3: weather,
    path4: todolist,
    path5: register,
    path6: admin,
    displayName: "training",
    description: "xxxx",
    detail1:
      "All the projects in here are not actually projects but excercises. Beginner, amateur excercises. All of them were made with the technologies known at the moment, and were made with great enthusiasm for learning and making another step in my developer career. Consider this excersices bellow as pictures of me as a baby. And do not forget to try them!",
    detail2: "xxxx",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
];
