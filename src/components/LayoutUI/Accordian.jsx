import React, { useState } from "react";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>
          {isActive ? (
            <img
              src="../img/icons/angle-down-solid.svg"
              alt="arrow down"
              style={{
                height: "30px",
                padding: "5px",
                cursor: "pointer",
              }}
            ></img>
          ) : (
            <img
              src="../img/icons/angle-up-solid.svg"
              alt="arrow up"
              style={{
                height: "30px",
                padding: "5px",
                cursor: "pointer",
              }}
            ></img>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <p>{props.content}</p>
          {props.children}
          <p>{props.addition}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
