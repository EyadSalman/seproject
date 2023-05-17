// Mock data for Customer model
const customers = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St, City',
      password: 'password@123'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '456 Elm St, City',
      password: 'password456',
    },
    // Add more customer objects as needed
  ];
  
  // Mock data for Car model
  const cars = [
    { make: "BMW", model: "X5", year: 2020 },
    { make: "BMW", model: "3 Series", year: 2019 },
    { make: "BMW", model: "i8", year: 2021 },
    { make: "BMW", model: "7 Series", year: 2022 },
    { make: "BMW", model: "M5", year: 2018 },
    { make: "Honda", model: "Civic", year: 2021 },
    { make: "Honda", model: "Accord", year: 2020 },
    { make: "Honda", model: "CR-V", year: 2019 },
    { make: "Honda", model: "Pilot", year: 2022 },
    { make: "Honda", model: "Fit", year: 2017 },
    { make: "Honda", model: "City", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Honda", model: "Accord Hybrid", year: 2022 },    
    { make: "Mercedez-Benz", model: "C-Class", year: 2021 },
    { make: "Mercedez-Benz", model: "E-Class", year: 2020 },
    { make: "Mercedez-Benz", model: "S-Class", year: 2022 },
    { make: "Mercedez-Benz", model: "GLC", year: 2019 },
    { make: "Mercedez-Benz", model: "GLE", year: 2018 },
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Toyota", model: "Rav4", year: 2019 },
    { make: "Toyota", model: "Highlander", year: 2022 },
    { make: "Toyota", model: "Prius", year: 2017 },
    { make: "Nissan", model: "Altima", year: 2020 },
    { make: "Nissan", model: "Maxima", year: 2019 },
    { make: "Nissan", model: "Rogue", year: 2021 },
    { make: "Nissan", model: "Pathfinder", year: 2022 },
    { make: "Nissan", model: "Sentra", year: 2018 },
    { make: "Susuki", model: "Swift", year: 2019 },
    { make: "Susuki", model: "Vitara", year: 2020 },
    { make: "Susuki", model: "Ciaz", year: 2017 },
    { make: "Susuki", model: "Jimny", year: 2021 },
    { make: "Susuki", model: "Baleno", year: 2018 },
    { make: "Susuki", model: "Mehran", year: 2005 },
    { make: "Susuki", model: "Alto", year: 2019 },
    { make: "Susuki", model: "Mehran", year: 2008 },
    { make: "Susuki", model: "Alto", year: 2017 },
  ];
  
  // Mock data for Engine model
  const engines = [
    {
      type: 'V6',
      make: 'Toyota',
      horsepower: 300,
      displacement: '3.5L'
    },
    {
      type: 'Inline-4',
      make: 'Honda',
      horsepower: 200,
      displacement: '2.0L'
    },
    // Add more engine objects as needed
  ];
  
  // Mock data for Worker model
  const workers = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      specialization: ['Tuning'],
      appointmentSlots: []
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      specialization: ['Painting'],
      appointmentSlots: []
    },
    {
      name: 'Michael Johnson',
      email: 'michael@example.com',
      specialization: ['Engine Swapping'],
      appointmentSlots: []
    },
    {
      name: 'Emily Brown',
      email: 'emily@example.com',
      specialization: ['Tuning', 'Engine Swapping'],
      appointmentSlots: []
    },
    {
      name: 'David Lee',
      email: 'david@example.com',
      specialization: ['Painting'],
      appointmentSlots: []
    },
    {
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      specialization: ['Tuning'],
      appointmentSlots: []
    },
    {
      name: 'Daniel Thompson',
      email: 'daniel@example.com',
      specialization: ['Engine Swapping'],
      appointmentSlots: []
    },
    {
      name: 'Olivia Anderson',
      email: 'olivia@example.com',
      specialization: ['Tuning'],
      appointmentSlots: []
    },
    {
      name: 'James Martinez',
      email: 'james@example.com',
      specialization: ['Wrapping'],
      appointmentSlots: []
    },
    {
      name: 'Sophia Garcia',
      email: 'sophia@example.com',
      specialization: ['Painting'],
      appointmentSlots: []
    },
    {
      name: 'Benjamin Taylor',
      email: 'benjamin@example.com',
      specialization: ['Modifications', 'Wrapping'],
      appointmentSlots: []
    },
    {
      name: 'Ava Hernandez',
      email: 'ava@example.com',
      specialization: ['Painting', 'Engine Restoration'],
      appointmentSlots: []
    },
    {
      name: 'Jacob Lopez',
      email: 'jacob@example.com',
      specialization: ['Modifications'],
      appointmentSlots: []
    },
    {
      name: 'Mia Martinez',
      email: 'mia@example.com',
      specialization: ['Engine Restoration'],
      appointmentSlots: []
    },
    {
      name: 'William Moore',
      email: 'william@example.com',
      specialization: ['Modifications'],
      appointmentSlots: []
    }
  ];  
  
  // Mock data for Service model
  const services = [
    {
      name: 'Tuning',
      description: 'Performance tuning for increased power and efficiency',
      price: 2000
    },
    {
      name: 'Modifications',
      description: 'Custom modifications to enhance the vehicle appearance',
      price: 10000
    },
    {
      name: 'Painting',
      description: 'Full or partial vehicle painting',
      price: 5000
    },
    {
      name: 'Wrapping',
      description: 'Vehicle wrapping with customized designs',
      price: 1500
    },
    {
      name: 'Engine Swapping',
      description: 'Replacement of the existing engine with a different one',
      price: 8000
    },
    {
      name: 'Engine Restoration',
      description: 'Restoration and rebuilding of engines',
      price: 20000
    },
    // Add more service objects as needed
  ];

  module.exports = {
    services,
    workers,
    customers,
    engines,
    cars
  };  