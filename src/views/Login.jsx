import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { plane } = useContext(AppContext);
  const [inputId, setInputId] = useState("");

  const onLogIn = () => {
    if (inputId === plane.id) {
      navigate("/controlpanel");
    } else {
      alert("Error!");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="id"
        onChange={(event) => {
          const value = event.target.value;
          setInputId(value);
        }}
      />
      <button
        onClick={() => {
          onLogIn();
        }}
      >
        Login
      </button>
    </div>
  );
}
