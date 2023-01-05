const Intern = require("../lib/Intern");

test("We can create a engineer with name, id, and email", async () => {

    // Setup 
    const name = "Rock Williams";
    const id = "1323";
    const email = "rock@williams.com";
    const university = "Berkeley"

    // Running the Code
    const intern = new Intern(name, id, email, university);

    // Verify the Result
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);



});

describe("This Describe Block is for Intern Functions", () => {

    // Universitty Setup
    test("We are looing for a good University", async () => {

        // Setup 
        const name = "Rock Williams";
        const id = "1323";
        const email = "rock@williams.com";
        const university = "Berkeley"
        const intern = new Intern(name, id, email, university);

        // Running the Code
        const result = intern.getUniversity();

        // Verify the Result
        expect(result).toBe(university);


    });



    // Role Setup
    test("We are looing for a good role", async () => {

        // Setup 
        const name = "Rock Williams";
        const id = "1323";
        const email = "rock@williams.com";
        const university = "Berkeley"
        const intern = new Intern(name, id, email, university);

        // Running the Code
        const result = intern.getRole();

        // Verify the Result
        expect(result).toBe('Intern');


    });



});