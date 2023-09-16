import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Specialization from "./components/Specialization/Specialization";
import RecruitmentAreas from "./components/RecruitmentAreas/RecruitmentAreas";
import Numbers from "./components/Numbers/Numbers";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="p-4 mx-15 md:mx-0 ">
        <Header />
        <Intro />
        <CompanyInfo />
        <Specialization />
        <RecruitmentAreas />
        <Numbers />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
