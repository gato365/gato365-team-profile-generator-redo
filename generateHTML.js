const { readFileSync, promises: fsPromises } = require('fs');


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 01/04/2023
// Date Modified: 01/04/2023
// Name: syncReadFile
// Purpose: Read-In Files
// Input: teamList
// Output: NA
// Notes: NA
// Help: https://bobbyhadz.com/blog/javascript-read-file-into-array#:~:text=Use%20the%20fs.,get%20an%20array%20of%20strings.
// -----------------Function Definitions--------------------
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}


const teamInfoStr = syncReadFile('./test.html');
const teamInfoJSON = JSON.parse(teamInfoStr);


const managerInfo = teamInfoJSON.filter(element => element.role == "Manager")
const engineerInfo = teamInfoJSON.filter(element => element.role == "Engineer")
const internInfo = teamInfoJSON.filter(element => element.role == "Intern")




// `<!DOCTYPE html>
// <html>

// <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         </head>

//         <body>

//         <!-- Name of Page -->
//     <title>${teamInfo.____} Page </title>
//     <!-- Insert Manager Info -->
//     ${displayEngineers(teamInfo.___)}
//     <!-- Insert Interns Info -->
//     ${displayInterns(teamInfo.___)}

// </body>

// </html>`


// chatGPT Entry: Generate dynamic bootstrap code that creates a grid of cards  based a list of template literals.

//   `<div class="container">
// 	<div class="row">
// 		${list.map(item => `<div class="col-md-4">
// 			<div class="card">
// 				<div class="card-body">
// 					${item}
// 				</div>
// 			</div>
// 		</div>`).join('')}
// 	</div>
// </div>`


// chatGPT Entry: Create a card based on image and 4 attributes in bootstrap.

//   `<div class="card">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${title}</h5>
//     <p class="card-text">${text}</p>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">${attr1}</li>
//       <li class="list-group-item">${attr2}</li>
//       <li class="list-group-item">${attr3}</li>
//       <li class="list-group-item">${attr4}</li>
//     </ul>
//   </div>
// </div>`



// Created a Mechanism to have the card be in a grid



//   typeEmployee = "image.jpg"
//   teamInformation = "description"

const teamName = managerInfo.teamInfo


// Determine Team Information
if (teamName === "The Alliance") {
  managerPic = "vince-mcmahon.jpg";
  engineerPic = "stephanie-mcmahon.jpg";
  internPic = "shane-mcmahon.jpg";
  decription = "The Alliance, also known as Team WCW/ECW and The Coalition, was a professional wrestling stable in the World Wrestling Federation (WWF, now WWE) that existed during the Invasion storyline from July to November 2001.";

} else if (teamName === "Rock 'n' Sock") {
  managerPic = "the-rock.jpg";
  engineerPic = "mike-foley.jpg";
  internPic = "mr-socko.jpg";
  decription = "The Rock 'n' Sock Connection was a professional wrestling tag team of The Rock and Mankind/Mick Foley who wrestled in the World Wrestling Federation between 1999 and 2000 and briefly in 2004. As a team, they held the WWF Tag Team Championship three times";
} else if (teamName === "D-Generation X") {
  managerPic = "chyna.jpg";
  engineerPic = "triple-h.jpg";
  internPic = "xpac.jpg";
  decription = "The group originated in the World Wrestling Federation (WWF, now known as WWE) in the midst of the \"Attitude Era\" in 1997 as a foil to another prominent faction, The Hart Foundation and became one of the main driving forces behind the WWF competing with World Championship Wrestling (WCW) in the Monday Night Wars. In addition to two other founding members Chyna and Rick Rude aside from Michaels and Triple H, the group expanded with new additions X-Pac, The New Age Outlaws (Road Dogg and Billy Gunn), and Tori until it disbanded in August 2000. ";
}






// Manager
`<div class="card">
<img src="${managerPic}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${managerInfo.name}</h5>
  <p class="card-text">${managerInfo.role}</p>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${managerInfo.email}</li>
    <li class="list-group-item">${managerInfo.officeNumber}</li>
    <li class="list-group-item">${managerInfo.id}</li>
    
  </ul>
</div>
</div>`

// Engineer
const engineerHTML = `<div class="container">
<div class="row">
  ${engineerInfo.map(item => `<div class="col-md-4">
    <div class="card">
      <div class="card-body">
        
      <div class="card">
      <img src="${engineerPic}" class="card-img-top" alt="...">
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
    <div class="card">
      <div class="card-body">
        
      <div class="card">
      <img src="${internPic}" class="card-img-top" alt="...">
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


console.log(internHTML);