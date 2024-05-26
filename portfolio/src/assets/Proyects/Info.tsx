// import login from "../Proyects/Images/FastDelivery/login.png";
import deliveryDrivers from "../Proyects/Images/FastDelivery/DeliveryDrivers.png";
import map from "../Proyects/Images/FastDelivery/Map.png";
import profile from "../Proyects/Images/FastDelivery/Profile.png";
import register from "../Proyects/Images/FastDelivery/Register.png";
import admin from "../Proyects/Images/FastDelivery/Admin.png";
import LoginImage from "../Proyects/Images/FastDelivery/LoginImage.png";
import NewPackage from "../Proyects/Images/FastDelivery/newpackage.png";
interface ProjectInfo {
  name: string;
  path: string;
  path2: string;
  path3: string;
  path4: string;
  path5: string;
  path6: string;
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
      "Technologies: Typescript, Next.js, Tailwind CSS, Jest, Docker, Sequelize, PostgreSQL, S3, AWS.",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
  {
    name: "Mi turno Web",
    path: "https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    path2: deliveryDrivers,
    path3: map,
    path4: profile,
    path5: register,
    path6: admin,
    displayName: "turno",
    description: "xxxx",
    detail1: "xxx",
    detail2: "xxxx",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
  {
    name: "TMDB",
    path: "https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    path2: deliveryDrivers,
    path3: map,
    path4: profile,
    path5: register,
    path6: admin,
    displayName: "tmdb",
    description: "xxxx",
    detail1: "xxx",
    detail2: "xxxx",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
  {
    name: "Training projects",
    path: "https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    path2: deliveryDrivers,
    path3: map,
    path4: profile,
    path5: register,
    path6: admin,
    displayName: "training",
    description: "xxxx",
    detail1: "xxx",
    detail2: "xxxx",
    detail3: "xxxx",
    link1: "xxxx",
    link2: "xxxx",
  },
];
