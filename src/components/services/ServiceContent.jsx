import ServiceModal from "./ServiceModal";
import serviceList from "./serviceList";

const ServiceContent = ({
  selectedService,
  openTab,
  closeTab,
  toggleState,
}) => {
  const service = serviceList[selectedService];
  return (
    <div className="services__content">
      <i className="uil uil-edit services__icon"></i>
      <h3 className="services__title">{service.title}</h3>

      <span
        className="services__button"
        onClick={() => {
          openTab();
        }}
      >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
      <div
        className={
          toggleState === service.id
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <ServiceModal
          closeTab={closeTab}
          title={service.title}
          description={service.description}
          service1={service.service1}
          service2={service.service2}
          service3={service.service3}
        />
      </div>
    </div>
  );
};

export default ServiceContent;
