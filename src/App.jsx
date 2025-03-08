import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-In";
import DropdownForm from "./components/Forms/forms.jsx"; // Import DropdownForm
import SignUp from "./pages/Sign-up";
import { Pipeline } from "./pages/Pipeline.jsx";
import { Tables } from "./pages/Tables.jsx";
import { Columns } from "./pages/Columns.jsx";
import {
  SourceTables,
  DestTables,
  Password,
  SourceColumns,
  Title,
} from "./components/Context.js";

export default function App() {
  const [source_tables, setsource_tables] = useState(null);
  const [isSource, setisSource] = useState(null);
  const [source_columns, setsource_columns] = useState(null);
  const [dest_columns, setdest_columns] = useState(null);
  const [Global_Password, setGlobal_Password] = useState(null);

  return (
    <SourceTables.Provider value={{ source_tables, setsource_tables }}>
      <DestTables.Provider value={{ dest_columns, setdest_columns }}>
        <Password.Provider value={{ Global_Password, setGlobal_Password }}>
          <SourceColumns.Provider value={{ source_columns, setsource_columns }}>
            <Title.Provider value={{ isSource, setisSource }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/SignIn" element={<SignIn />} />
                  <Route path="/dropdown" element={<DropdownForm />} />
                  <Route path="/pipeline" element={<Pipeline />} />
                  <Route path="/all-tables" element={<Tables />} />
                  <Route path="/all-columns" element={<Columns />} />
                </Routes>
              </BrowserRouter>
            </Title.Provider>
          </SourceColumns.Provider>
        </Password.Provider>
      </DestTables.Provider>
    </SourceTables.Provider>
  );
}
