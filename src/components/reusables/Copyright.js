import React from "react";

export default function Copyright() {
  let currentYear = new Date();
  return (
    <p className="copyright">
      {"Copyright 2016 - " + currentYear.getFullYear()}
    </p>
  );
}
