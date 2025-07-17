// const api_url = import.meta.env.VITE_API_URL;



const createEmployee = async (formData) => {
  const response = await fetch("http://localhost:8000/api/employee", {
    
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response;
};

const employeeService = {
  createEmployee,
};

export default employeeService;

