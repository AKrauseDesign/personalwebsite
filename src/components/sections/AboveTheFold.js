import React from "react";
import Button from "../reusables/Button";

const AboveTheFold = ({ title, description }) => {
  return (
    <section id="atf">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button-container">
          <Button
            url={process.env.PUBLIC_URL + "files/AndrewKrauseResume2019.pdf"}
            icon="newspaper"
            text="Resume"
            external={true}
          />
          <Button url="#contact" icon="brain" text="Projects" />
        </div>
      </div>
    </section>
  );
};
export default AboveTheFold;
