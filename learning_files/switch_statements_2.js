const inquirer = require('inquirer');


testQuestion = [
    // Q1.
    {
        type: 'list',
        name: 'response',
        message: 'What do you want to do next?',
        choices: ["Case 1", "Case 2", "Break"]
    }
]

function testSwitchRecursion() {
    let container;
    inquirer.prompt(testQuestion).then((solution) => {
        
        const testInfo = solution.response;

        switch (testInfo) {
            case 'Case 1':
                console.log('1. Get lost!');
                testSwitchRecursion();
                break;
            case 'Case 2':
                console.log('2. Woah!');
                testSwitchRecursion();
                break;
            default:
                console.log('3. Keep Going')
                break;
        }

    });

    
}


testSwitchRecursion()

