import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar.jsx";

import HomePage from "./HomePage.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
