import { useState } from "react";
import "./services.css";
import ServiceContent from "./ServiceContent";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <ServiceContent
          selectedService="list1"
          toggleState={toggleState}
          openTab={() => toggleTab(1)}
          closeTab={() => toggleTab(0)}
        />
        <ServiceContent
          selectedService="list2"
          toggleState={toggleState}
          openTab={() => toggleTab(2)}
          closeTab={() => toggleTab(0)}
        />
      </div>
    </section>
  );
};

export default Services;
