import { backend } from "./skillList";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backend.map((backend) => {
            return (
              <div key={backend.id} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{backend.name}</h3>
                  <span className="skills__level">{backend.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Backend;
