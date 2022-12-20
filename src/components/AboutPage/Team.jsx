import React from "react";
import Link from "next/link";
const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="team__info">
          <h1>Meet the team</h1>
          <p>
            We’re a diverse, close-knit team on an adventure to build something
            enduring, while learning something new, every day.
          </p>
        </div>
        <div className="team__people">
          <div className="team__person">
            <img src="../img/people/team.png" alt="team member" />
            <div className="team__person-info">
              <h2>Prince Blessing Dunbar</h2>
              <p>Co-founder</p>
            </div>
          </div>
          <div className="team__person">
            <img src="../img/people/team.png" alt="team member" />
            <div className="team__person-info">
              <h2>Alfred Augustin Bainton</h2>
              <p>Co-founder</p>
            </div>
          </div>
          <div className="team__person">
            <img src="../img/people/team.png" alt="team member" />
            <div className="team__person-info">
              <h2>Adam Smith</h2>
              <p>Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
