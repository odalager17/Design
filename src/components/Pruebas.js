import React, { useRef } from "react";

// import ReactToPdf from "react-to-pdf";
import style from "./Pruebas.module.css";

import Logo from "../assets/doctor.svg";

// import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};

function Pruebas() {
  const componentRef = useRef();
  const Resume = () => (
    <div className={style.print} ref={componentRef}>
      <p>
        Richard hails from Tulsa. He has earned degrees from the University of
        Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied
        Piper, he worked for Hooli as a part time software developer. While his
        work focuses on applied information theory, mostly optimizing lossless
        compression schema of both the length-limited and adaptive variants, his
        non-work interests range widely, everything from quantum computing to
        chaos theory.
      </p>
      <p>
        Richard hails from Tulsa. He has earned degrees from the University of
        Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied
        Piper, he worked for Hooli as a part time software developer. While his
        work focuses on applied information theory, mostly optimizing lossless
        compression schema of both the length-limited and adaptive variants, his
        non-work interests range widely, everything from quantum computing to
        chaos theory.
      </p>
    </div>
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={style.container}>
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        Print Resume
      </button>
      {/* <h1 ref={componentRef}>HELLO?</h1> */}
      <Resume />
    </div>
  );
}

export default Pruebas;
