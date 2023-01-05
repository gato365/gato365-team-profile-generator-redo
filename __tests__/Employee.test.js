const Employee = require("../lib/Employee");



test("We can create a employee with name, id, and email", async () => {

    // Setup 
    const name = "James Williams";
    const id = "123";
    const email = "james@williams.com";

    // Running the Code
    const employee = new Employee(name, id, email);

    // Verify the Result
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id); expect(employee.email).toBe(email);


});

describe("This Describe Block is for Employee Functions", () => {
   // Name Setup
      test("We are looing for a good name", async () => {

        // Setup 
        const name = "James Williams";
        const id = "123";
        const email = "james@williams.com";
        const employee = new Employee(name, id, email);

        // Running the Code
        const result = employee.getName();

        // Verify the Result
        expect(result).toBe(name);


    });


  // ID Setup
  test("We are looing for a good id", async () => {

    // Setup 
    const name = "James Williams";
    const id = "123";
    const email = "james@williams.com";
    const employee = new Employee(name, id, email);

    // Running the Code
    const result = employee.getId();

    // Verify the Result
    expect(result).toBe(id);


});

    // Email Setup
    test("We are looing for a good email", async () => {

        // Setup 
        const name = "James Williams";
        const id = "123";
        const email = "james@williams.com";
        const employee = new Employee(name, id, email);

        // Running the Code
        const result = employee.getEmail();

        // Verify the Result
        expect(result).toBe(email);


    });



  // Role Setup
  test("We are looing for a good role", async () => {

    // Setup 
    const name = "James Williams";
    const id = "123";
    const email = "james@williams.com";
    const employee = new Employee(name, id, email);

    // Running the Code
    const result = employee.getRole();

    // Verify the Result
    expect(result).toBe('Employee');


});

   

});