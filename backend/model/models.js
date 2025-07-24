// models.js
// Abe Garage Models - Basic vehicle data

const vehicles = [
  { id: 1, owner: "John Doe", type: "Sedan", brand: "Toyota", plate: "AB1234" },
  { id: 2, owner: "Sarah Lee", type: "SUV", brand: "Honda", plate: "HG5678" },
  { id: 3, owner: "Michael Chen", type: "Truck", brand: "Ford", plate: "TR9012" },
];

function getVehicleByPlate(plate) {
  return vehicles.find(vehicle => vehicle.plate === plate);
}

function
