const Manager = require('../lib/Manager');

test("We can create a Manager with name, id, and email", async () => {

    // Setup 
    const name = "Rock Williams";
    const id = "1323";
    const email = "rock@williams.com";
    const officeNumber = "226554";
    const teamInfo = "WWE";
    // Running the Code
    const manager = new Manager(name, id, email, officeNumber,teamInfo);

    // Verify the Result
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);



});

describe("This Describe Block is for Manager Functions", () => {

    // Office Number Setup
    test("We are looing for a good Office Number", async () => {

        // Setup 
        const name = "Rock Williams";
        const id = "1323";
        const email = "rock@williams.com";
        const officeNumber = "226554";
        const teamInfo = "WWE";
        const manager = new Manager(name, id, email, officeNumber,teamInfo);

        // Running the Code
        const result = manager.getOfficeNumber();

        // Verify the Result
        expect(result).toBe(officeNumber);


    });

        // Team Info Setup
        test("We are looing for a good Team Info", async () => {

            // Setup 
            const name = "Rock Williams";
            const id = "1323";
            const email = "rock@williams.com";
            const officeNumber = "226554";
            const teamInfo = "WWE";
            const manager = new Manager(name, id, email, officeNumber,teamInfo);
    
            // Running the Code
            const result = manager.getTeamInfo();
    
            // Verify the Result
            expect(result).toBe(teamInfo);
    
    
        });
    




    // Role Setup
    test("We are looing for a good role", async () => {

        // Setup 
        const name = "Rock Williams";
        const id = "1323";
        const email = "rock@williams.com";
        const officeNumber = "226554";
        const manager = new Manager(name, id, email, officeNumber);

        // Running the Code
        const result = manager.getRole();

        // Verify the Result
        expect(result).toBe('Manager');


    });



});