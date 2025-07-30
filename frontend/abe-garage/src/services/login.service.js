const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  console.log("About to send request");
  console.log(requestOptions.body);

  const response = await fetch(
    "http://localhost:8000/api/employee/login",
    requestOptions
  );
  return response;
};

const logOut = () => {
  localStorage.removeItem("employee");
};

export default { logIn, logOut };
