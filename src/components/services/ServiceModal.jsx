const ServiceModal = ({
  closeTab,
  title,
  description,
  service1,
  service2,
  service3,
}) => {
  return (
    <div className="services__modal-content">
      <i
        onClick={() => {
          closeTab();
        }}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">{title}</h3>
      <p className="services__modal-description">{description}</p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">{service1}</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">{service2}</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">{service3}</p>
        </li>
      </ul>
    </div>
  );
};

export default ServiceModal;
