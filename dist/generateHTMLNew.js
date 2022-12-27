
// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/16/2022
// Date Modified: 12/17/2022
// Name: generateHTML
// Purpose: Generate HTML file
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function generateHTML(currentManager, currentEngineer, currentIntern) {

    const teamInfo = currentManager.getTeamInfo();


    let managerPic;
    let engineerPic;
    let internPic;
    let decription;




    if (teamInfo === "The Alliance") {
        managerPic = "vince-mcmahon.jpg";
        engineerPic = "stephanie-mcmahon.jpg";
        internPic = "shane-mcmahon.jpg";
        decription = "The Alliance, also known as Team WCW/ECW and The Coalition, was a professional wrestling stable in the World Wrestling Federation (WWF, now WWE) that existed during the Invasion storyline from July to November 2001.";

    } else if (teamInfo === "Rock 'n' Sock") {
        managerPic = "the-rock.jpg";
        engineerPic = "mike-foley.jpg";
        internPic = "mr-socko.jpg";
        decription = "The Rock 'n' Sock Connection was a professional wrestling tag team of The Rock and Mankind/Mick Foley who wrestled in the World Wrestling Federation between 1999 and 2000 and briefly in 2004. As a team, they held the WWF Tag Team Championship three times";
    } else if (teamInfo === "D-Generation X") {
        managerPic = "chyna.jpg";
        engineerPic = "triple-h.jpg";
        internPic = "xpac.jpg";
        decription = "The group originated in the World Wrestling Federation (WWF, now known as WWE) in the midst of the \"Attitude Era\" in 1997 as a foil to another prominent faction, The Hart Foundation and became one of the main driving forces behind the WWF competing with World Championship Wrestling (WCW) in the Monday Night Wars. In addition to two other founding members Chyna and Rick Rude aside from Michaels and Triple H, the group expanded with new additions X-Pac, The New Age Outlaws (Road Dogg and Billy Gunn), and Tori until it disbanded in August 2000. ";
    }




    const htmlFile = `
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        
    <title>${currentManager.getTeamInfo()} Page </title>
    <style>
        .card-img-top {
            width: 23rem;
            height: 33rem;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(2, auto);
            justify-content: space-around;
            gap: 0 3em;
            text-transform: capitalize;

        }

        .card-title {
            text-align: center;
        }

        .text-info {
            font-size: 30px;
        }



        /* #manager {
            display: none;
        }

        #engineer {
            display: none;
        }

        #intern {
            display: none;
        } */
    </style>
</head>

<body>


<h1> ${currentManager.getTeamInfo()} Team </h1>

    <div>
        <div class="d-flex justify-content-around align-items-center" >

            <div class="card" style="width: 35rem;" id="manager">
                <img class="card-img-top" src="../assets/images/${managerPic}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Manager</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b> ${currentManager.getName()} </div>
                        </li>
                        <li>
                            <div> <b> Email:</b> ${currentManager.getEmail()} </div>
                        </li>
                        <li>
                            <div> <b> ID:</b> ${currentManager.getRole()} </div>
                        </li>
                        <li>
                            <div> <b> Phone Number:</b> ${currentManager.getOfficeNumber()}</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


            <div class="card" style="width: 35rem;" id="engineer">
                <img class="card-img-top" src="./assets/images/${engineerPic}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Engineer</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b>${currentEngineer.getName()}</div>
                        </li>
                        <li>
                            <div> <b> Email:</b> ${currentEngineer.getEmail()}</div>
                        </li>
                        <li>
                            <div> <b> ID:</b> ${currentEngineer.getId()}</div>
                        </li>
                        <li>
                            <div> <b> GitHub Account:</b> ${currentEngineer.getGitHubAccount()}</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


            <div class="card" style="width: 35rem;" id="intern">
                <img class="card-img-top" src="./assets/images/${internPic}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Intern</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b> ${currentIntern.getName()}</div>
                        </li>
                        <li>
                            <div> <b> Email:</b> ${currentIntern.getEmail()}</div>
                        </li>
                        <li>
                            <div> <b> ID:</b> ${currentIntern.getRole()}</div>
                        </li>
                        <li>
                            <div> <b> University:</b> ${currentIntern.getUniversity()}</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    </div>

</body>

</html>`;


    return htmlFile;


}



// Generate Mdoule
module.exports = generateHTML;