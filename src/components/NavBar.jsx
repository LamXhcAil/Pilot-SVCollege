import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../appContext";

export default function NavBar() {
  const {} = useContext(AppContext);

  const navigate = useNavigate();

  const sortPage = "/sort";
  const addPage = "/add";
  const deletePage = "/delete";

  const onAll = () => {
    navigate("/controlpanel");
  };
  const onSort = () => {
    navigate(`/controlpanel${sortPage}`);
  };
  const onAdd = () => {
    navigate(`/controlpanel${addPage}`);
  };
  const onDelete = () => {
    navigate(`/controlpanel${deletePage}`);
  };

  return (
    <>
      <button
        onClick={() => {
          onAll();
        }}
      >
        All Flights
      </button>
      <button
        onClick={() => {
          onSort();
        }}
      >
        Sort Flights
      </button>
      <button
        onClick={() => {
          onAdd();
        }}
      >
        Add Flights
      </button>
      <button
        onClick={() => {
          onDelete();
        }}
      >
        Delete Flights
      </button>
    </>
  );
}
