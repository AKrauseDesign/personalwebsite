import React from "react";

export default function EmailContact(props) {
  return (
    <p>
      Email me: <span> </span>
      <a href={"mailto:" + props.email}>{props.email}</a>
    </p>
  );
}
