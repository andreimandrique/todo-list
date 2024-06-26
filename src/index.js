import { hello } from "./hello";
import "./style.css";
import myPic from "./haruhiro.jpg";

const myProfilePic = document.getElementById("myProfilePic");
const h1 = document.querySelector("h1");

myProfilePic.src = myPic;

h1.innerText = hello();
