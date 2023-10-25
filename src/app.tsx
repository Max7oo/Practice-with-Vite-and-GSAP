import "./app.css";

import Benefits from "./components/benefits/benefits";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Care from "./components/care/care";
import Charts from "./components/charts/charts";
import ImageSlider from "./components/images/images";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export function App() {
  return (
    <>
      <Nav />
      <Header />
      <Benefits />
      <Care />
      <Charts />
      <ImageSlider />
      <Contact />
      <Footer />
      {/* https://dribbble.com/shots/22515072-Secure-SaaS-Banking-Solutions-for-Modern-Fintech-Innovation */}
      {/* https://dribbble.com/shots/22537421-Mental-Health-Website */}
    </>
  );
}
