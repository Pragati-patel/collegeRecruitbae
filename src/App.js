import style from "./App.module.css";
import { Heading } from "./Components/HeadingContainer";
import { NavBar } from "./Components/NavBar";
import { Aboutus } from "./Components/AboutusContainer";
import { Collabration } from "./Components/Collabartion";
import { Process } from "Components/Process/Process";
import { CareerTransformation } from "Components/CareerTransformation";
import { Candidate } from "Components/Candidate";
import { Form } from "Components/Form";
import { FooterSection } from "Components/FooterSection";

function App() {
  return (
    <div className={style.MainContainer}>
      <NavBar />
      <Heading />
      <Aboutus />
      <Collabration />
      <Process />
      <CareerTransformation />
      <Candidate />
      <Form/>
      <FooterSection/>
    </div>
  );
}

export default App;

