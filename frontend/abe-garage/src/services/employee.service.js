// // const api_url = import.meta.env.VITE_API_URL;



// // const createEmployee = async (formData) => {
//   const response = await fetch("http://localhost:8000/api/employee", {
    
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(formData),
// //   });
// //   return response;
// // };

// // const employeeService = {
// //   createEmployee,
// // };

// // export default employeeService;



// A function to send post request to create a new employee 
const createEmployee = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
const response = await fetch("http://localhost:8000/api/employee", requestOptions);
  return response;
}


const getAllEmployees = async (token) => {
  // console.log(token);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
const response = await fetch(
  "http://localhost:8000/api/employees",
  requestOptions
);
  return response;
};


// Export all the functions 
const employeeService = {
  createEmployee,
  getAllEmployees,
};
export default employeeService; 