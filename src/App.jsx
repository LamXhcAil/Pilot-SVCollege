import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppContext from "./appContext";
import Login from "./views/Login";
import ControlPanel from "./views/ControlPanel";
import SortFlights from "./views/SortFlights";
import AddFlights from "./views/AddFlights";
import DeleteFlights from "./views/DeleteFlights";
import { useState } from "react";

function App() {
  const plane = {
    id: "12345",
    brand: "brand",
    numberOfPassangers: 500,
  };

  const [flights, setFlights] = useState([
    { id: "1", brand: "brand1", numberOfPassangers: 501 },
    { id: "2", brand: "brand2", numberOfPassangers: 502 },
    { id: "3", brand: "brand3", numberOfPassangers: 503 },
    { id: "4", brand: "brand4", numberOfPassangers: 504 },
  ]);

  const pages = [{ name: "sort" }, { name: "add" }, { name: "delete" }];

  const contextValue = { plane };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/controlpanel" element={<ControlPanel />} />
          <Route path="/controlpanel/sort" element={<SortFlights />} />
          <Route path="/controlpanel/add" element={<AddFlights />} />
          <Route path="/controlpanel/delete" element={<DeleteFlights />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
