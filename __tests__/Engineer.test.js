const Engineer = require("../lib/Engineer");



test("We can create a engineer with name, id, and email", async () => {

    // Setup 
    const name = "James Williams";
    const id = "123";
    const email = "james@williams.com";
    const gitHubAccount = "jaimeruner"

    // Running the Code
    const engineer = new Engineer(name, id, email, gitHubAccount);

    // Verify the Result
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id); 
    expect(engineer.email).toBe(email);
    


});

describe("This Describe Block is for Engineer Functions", () => {

    // GitHub Setup
    test("We are looing for a good GitHub", async () => {

        // Setup 
        const name = "James Williams";
        const id = "123";
        const email = "james@williams.com";
        const engineer = new Engineer(name, id, email);

        // Running the Code
        const result = engineer.getEmail();

        // Verify the Result
        expect(result).toBe(email);


    });



    // Role Setup
    test("We are looing for a good role", async () => {

        // Setup 
    const name = "James Williams";
    const id = "123";
    const email = "james@williams.com";
    const gitHubAccount = "jaimeruner"
    const engineer = new Engineer(name, id, email, gitHubAccount);

        // Running the Code
        const result = engineer.getGitHubAccount();

        // Verify the Result
        expect(result).toBe('Engineer');


    });



});