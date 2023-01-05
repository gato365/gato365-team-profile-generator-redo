// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Require Classses
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateHTML = require('../learning_files/dist/generateHTMLNew');



// Managers
const questionsManager = [
  //1. Team Membership
  {
    type: 'list',
    name: 'teamInfo',
    message: '1. Which team are you on?',
    choices: ["The Alliance", "Rock 'n' Sock", "D-Generation X"]
  },
  // 2.
  {
    type: 'input',
    name: 'employeeManagerName',
    message: '2. What is the Manager\'s name?',
  },
  // 3.
  {
    type: 'input',
    name: 'employeeManagerID',
    message: '3. What is the Manager\'s ID?',
  },
  // 4.
  {
    type: 'input',
    name: 'employeeManagerEmail',
    message: '4. What is the Manager\'s Email?',
  },
  // 5.
  {
    type: 'input',
    name: 'officeNumber',
    message: '5. What is the the manager\'s office number?'
  }
]

// Engineers
const questionsEngineer = [
  // 1.
  {
    type: 'input',
    name: 'employeeEngineerName',
    message: '1. What is the Engineer\'s name?',
  },
  // 2.
  {
    type: 'input',
    name: 'employeeEngineerID',
    message: '2. What is the Engineer\'s ID?',
  },
  // 3.
  {
    type: 'input',
    name: 'employeeEngineerEmail',
    message: '3. What is the Engineer\'s Email?',
  },
  // 4.
  {
    type: 'input',
    name: 'githubAccount',
    message: '4. What is the Engineer\'s GitHub account?'
  }
]

// Interns
const questionsIntern = [
  // 1.
  {
    type: 'input',
    name: 'employeeInternName',
    message: '1. What is the Intern\'s name?',
  },
  // 2.
  {
    type: 'input',
    name: 'employeeInternID',
    message: '2. What is the Intern\'s ID?',
  },

  // 3.
  {
    type: 'input',
    name: 'employeeInternEmail',
    message: '3. What is the Intern\'s Email?',
  },
  // 4.
  {
    type: 'input',
    name: 'schoolName',
    message: '4. What is the Intern\'s school name?',

  }
]


// A. Menu After Manger information is added
const menuManInput = [
  {
    type: 'list',
    name: 'afterMInfo',
    message: 'What do you want to do next?',
    choices: ["Add Engineer", "Add Intern", "The Team is finished"]
  }
]

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: writeToFile
// Purpose: writes the markdown file to a file based on the data input of data filename
// Input: fileName, Data
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/28/2022
// Date Modified: 01/03/2023
// Name: addEngineer
// Purpose: ask questions about engineer are asked 
// Input: team list
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function addEngineer(teamList) {
  inquirer.prompt(questionsEngineer).then((dataEngineer) => {
    // Create a new Engineer
    const currentEngineer = new Engineer(
      dataEngineer.employeeEngineerName,
      dataEngineer.employeeEngineerID,
      dataEngineer.employeeEngineerEmail,
      dataEngineer.githubAccount);
    // Add Role
    currentEngineer.role = currentEngineer.getRole();
    // Add Engineer to list
    teamList.push(currentEngineer);
    // Ask Menu
    menuPrompt(teamList)



  });
}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/28/2022
// Date Modified: 01/03/2023
// Name: addIntern
// Purpose: ask questions about intern are asked 
// Input: team list
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function addIntern(teamList) {
  inquirer.prompt(questionsIntern).then((dataIntern) => {
    // Create a new Intern
    const currentIntern = new Intern(
      dataIntern.employeeInternName,
      dataIntern.employeeInternID,
      dataIntern.employeeInternEmail,
      dataIntern.schoolName);

    // Add intern to list
    teamList.push(currentIntern);
    // Add Role
    currentIntern.role = currentIntern.getRole();

    // Ask Menu
    menuPrompt(teamList)


  });

}




// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 01/04/2023
// Date Modified: 01/04/2023
// Name: generateTeam
// Purpose: Generate HTML page for team Team
// Input: teamList
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function generateTeam(teamInfoJSON) {
  const managerInfo = teamInfoJSON.filter(element => element.role == "Manager")
  const engineerInfo = teamInfoJSON.filter(element => element.role == "Engineer")
  const internInfo = teamInfoJSON.filter(element => element.role == "Intern")




  // Created a Mechanism to have the card be in a grid

  const teamName = managerInfo[0].teamInfo

  let managerPic;
  let engineerPic;
  let internPic;
  let decription;
  let teamColor;


  // Determine Team Information
  if (teamName === "The Alliance") {
    managerPic = "./assets/images/vince-mcmahon.jpg";
    engineerPic = "./assets/images/stephanie-mcmahon.jpg";
    internPic = "./assets/images/shane-mcmahon.jpg";
    decription = "The Alliance, also known as Team WCW/ECW and The Coalition, was a professional wrestling stable in the World Wrestling Federation (WWF, now WWE) that existed during the Invasion storyline from July to November 2001.";
    teamColor = "rgb(178, 120, 120)";

  } else if (teamName === "Rock 'n' Sock") {
    managerPic = "./assets/images/the-rock.jpg";
    engineerPic = "./assets/images/mike-foley.jpg";
    internPic = "./assets/images/mr-socko.jpg";
    decription = "The Rock 'n' Sock Connection was a professional wrestling tag team of The Rock and Mankind/Mick Foley who wrestled in the World Wrestling Federation between 1999 and 2000 and briefly in 2004. As a team, they held the WWF Tag Team Championship three times";
    teamColor = "rgb(129, 126, 126)";
  } else if (teamName === "D-Generation X") {
    managerPic = "./assets/images/chyna.jpg";
    engineerPic = "./assets/images/triple-h.jpg";
    internPic = "./assets/images/xpac.jpg";
    decription = "The group originated in the World Wrestling Federation (WWF, now known as WWE) in the midst of the \"Attitude Era\" in 1997 as a foil to another prominent faction, The Hart Foundation and became one of the main driving forces behind the WWF competing with World Championship Wrestling (WCW) in the Monday Night Wars. In addition to two other founding members Chyna and Rick Rude aside from Michaels and Triple H, the group expanded with new additions X-Pac, The New Age Outlaws (Road Dogg and Billy Gunn), and Tori until it disbanded in August 2000. ";
    teamColor = "rgb(137, 166, 137)";
  }








  // Manager
  const managerHTML = `<div class="card">
  <img src="${managerPic}" class="card-img-top" alt="..." style="width:100%;max-width:250px;display:block;margin:0 auto;">
  <div class="card-body">
    <h5 class="card-title">${managerInfo[0].name}</h5>
    <p class="card-text">${managerInfo[0].role}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Email: ${managerInfo[0].email}</li>
      <li class="list-group-item"> Office Number: ${managerInfo[0].officeNumber}</li>
      <li class="list-group-item"> ID: ${managerInfo[0].id}</li>
      
    </ul>
  </div>
  </div>`







  // Engineer
  const engineerHTML = `<div class="container">
  <div class="row">
    ${engineerInfo.map(item => `<div class="col-md-4">
    <div class="card" style="width:450px;">
    <div class="card-body" style="background:green;padding:20px;">
          
        <div class="card">
        <img src="${engineerPic}" class="card-img-top" alt="..." 
         style="width:100%;max-width:250px;display:block;margin:0 auto;">
        <div class="card-body">
          <h5 class="card-title">Name: ${item.name}</h5>
          <p class="card-text">Role: ${item.role}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${item.email}</li>
            <li class="list-group-item">GitHub Account: ${item.gitHubAccount}</li>
            <li class="list-group-item">ID: ${item.id}</li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>`).join('')}
  </div>
  </div>`


  // Intern
  const internHTML = `<div class="container">
  <div class="row">
    ${internInfo.map(item => `<div class="col-md-4">
    <div class="card" style="width:450px;">
    <div class="card-body" style="background:green;padding:20px;">
          
        <div class="card">
        <img src="${internPic}" class="card-img-top" alt="..."  style="width:100%;max-width:250px;display:block;margin:0 auto;">
        <div class="card-body">
          <h5 class="card-title">Name: ${item.name}</h5>
          <p class="card-text">Role: ${item.role}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${item.email}</li>
            <li class="list-group-item">University: ${item.university}</li>
            <li class="list-group-item">ID: ${item.id}</li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>`).join('')}
  </div>
  </div>`;


  const htmlPage = `<!DOCTYPE html>
  <html>
  
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          </head>
  
          <body  style="background-color:${teamColor};" >
  
      <!-- Name of Page -->
      <title>${teamName} Page </title>
      <br>
      <br>
      <h1 style="text-align:center;">${teamName} Page </h1>
      <br>
      <br>
      <!-- Insert Manager Info -->
      <h2 style="text-align:center;"> Manager Information </h2>

      <div style="text-align:center;width:500px;margin:0 auto;">
      <div style="background:#eee;padding:20px;">
      ${managerHTML}
      </div>
      </div>
  
      <!-- Insert Engineers Info -->
      <div style="text-align:center;width:500px;margin:0 auto;">
      <div style="background:#eee;padding:20px;">
      <h2 style="text-align:center;"> Engineer(s) Information </h2>
      ${engineerHTML}
      </div>
      </div>
  
      <!-- Insert Interns Info -->
      <div style="text-align:center;width:500px;margin:0 auto;">
      <div style="background:#eee;padding:20px;">
      <h2 style="text-align:center;"> Intern(s) Information </h2>
      ${internHTML}
      </div>
      </div>
  
  
      <h2> Team General Information: </h2>
  ${decription}
  
  </body>
  
  </html>`

  // const teamStr = JSON.stringify(teamList);
  writeToFile('team_page.html', htmlPage);
}
// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/28/2022
// Date Modified: 01/03/2023
// Name: buildTeam
// Purpose: put info into html
// Input: teamList
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function buildTeam(teamList) {
  // Put information into HTML
  // const newhtmlFile = generateHTML(currentManager, currentEngineer, currentIntern);
  // console.log(typeof teamList);
  // const teamStr = JSON.stringify(teamList);
  // writeToFile('test.html', teamStr);
  generateTeam(teamList);
  console.log("Made it!");

}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/28/2022
// Date Modified: 12/29/2022
// Name: menuPrompt
// Purpose: ask questions about next move
// Input: NA
// Output: team
// Notes: NA
// -----------------Function Definitions--------------------
function menuPrompt(teamList) {
  inquirer.prompt(menuManInput).then((dataMenu) => {
    const userDecision = dataMenu.afterMInfo;
    switch (userDecision) {
      case 'Add Engineer':
        teamList = addEngineer(teamList);
        break;
      case 'Add Intern':
        teamList = addIntern(teamList);
        break;
      default:
        buildTeam(teamList);
    }
  });

}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 01/03/2023
// Name: init
// Purpose: runs questions of prompt and stores information into data then runs writeToFile
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function init() {
  // Create Team List
  const teamList = [];
  inquirer.prompt(questionsManager).then((dataManager) => {
    // Create a new Manager
    const currentManager = new Manager(
      dataManager.employeeManagerName,
      dataManager.employeeManagerID,
      dataManager.employeeManagerEmail,
      dataManager.officeNumber,
      dataManager.teamInfo,
    );
    // Push Manager
    teamList.push(currentManager);
    // Add Role
    currentManager.role = currentManager.getRole();
    // Run additional questions about other members of tems
    menuPrompt(teamList);
  });
}

module.exports = { init };





