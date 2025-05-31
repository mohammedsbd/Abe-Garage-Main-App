//import the routes and route components from react router
import {Routes, Route} from 'react-router-dom';
//import the page componenets
import Home from './markup/pages/Home.jsx';
import Login from './markup/pages/Login.jsx';
// import 404 from './pages/404.js';

import AddEmployee from "./markup/pages/admin/addEmployee.jsx";





function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
        {/* Add more routes as needed */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App
