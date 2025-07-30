//import the routes and route components from react router
import {Routes, Route} from 'react-router-dom';
//import the page componenets
import Home from './markup/pages/Home.jsx';
import Login from './markup/pages/Login.jsx';
//import the header and footer components
import Header from './markup/components/Header/Header.jsx';
import Footer from './markup/components/Footer/Footer.jsx';
import Unauthorized from "./markup/pages/Unauthotized.jsx";
import About from "./markup/pages/About.jsx";
import Services from "./markup/pages/Services.jsx";

// Import the Orders and Customers components 
import Orders from './markup/pages/admin/Orders.jsx';
import Customers from './markup/pages/admin/Customers.jsx';
// Import the Employees component 
import Employees from './markup/pages/admin/Employees.jsx';

import AddEmployee from "./markup/pages/admin/addEmployee.jsx";
//import the css files
import "./assets/template-assets/css/bootstrap.css";
import "./assets/template-assets/css/style.css";
import "./assets/template-assets/css/responsive.css";
import "./assets/template-assets/css/color.css";
import "./assets/styles/custom.css";
import VivoChatbot from './markup/components/Chatbot/Chatbot.jsx';
// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';
import NotFoundPage from './markup/pages/404.jsx';









function App() {

  return (
    <>
      <Header />
      <VivoChatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />
        {/* // Add the Customers Route  */}
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<Employees />} />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />

        {/* Add more routes as needed */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
