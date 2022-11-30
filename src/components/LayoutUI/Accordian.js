import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img
              src="../img/icons/angle-down-solid.svg"
              style={{
                height: "30px",
                padding: "5px",
                cursor: "pointer",
              }}
            ></img>
          ) : (
            <img
              src="../img/icons/angle-up-solid.svg"
              style={{
                height: "30px",
                padding: "5px",
                cursor: "pointer",
              }}
            ></img>
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
