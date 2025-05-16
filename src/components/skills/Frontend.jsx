import { frontend } from "./skillList";

const Frontend = () => {
  const midpoint = Math.ceil(frontend.length / 2);
  const firstHalf = frontend.slice(0, midpoint);
  const secondHalf = frontend.slice(midpoint);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {firstHalf.map((frontend) => {
            return (
              <div key={frontend.id} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{frontend.name}</h3>
                  <span className="skills__level">{frontend.level}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skills__group">
          {secondHalf.map((frontend) => {
            return (
              <div key={frontend.id} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{frontend.name}</h3>
                  <span className="skills__level">{frontend.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
