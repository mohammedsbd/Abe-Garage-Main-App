//import the routes and route components from react router
import {Routes, Route} from 'react-router-dom';
//import the page componenets
import Home from './markup/pages/Home.jsx';
import Login from './markup/pages/Login.jsx';
//import the header and footer components
import Header from './markup/components/Header/Header.jsx';
import Footer from './markup/components/Footer/Footer.jsx';

import AddEmployee from "./markup/pages/admin/addEmployee.jsx";
//import the css files
import "./assets/template-assets/css/bootstrap.css";
import "./assets/template-assets/css/style.css";
import "./assets/template-assets/css/responsive.css";
import "./assets/template-assets/css/color.css";
import "./assets/styles/custom.css";






function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
        {/* Add more routes as needed */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
