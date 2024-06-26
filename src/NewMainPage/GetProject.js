// TODO: these will need to be changed with the images you add
import {
  addUser,
  editUser,
  mapexample,
  updatedwatersensoricon,
  the3sensors,
  updatedsensor,
  machinemanager,
  nextfavartist0,
  nextfavartist1,
  nextfavartist2,
  joustgif,
  spriterun,
  prototype_radio,
  explanation,
  // trussbust1,
  // flicker1,
  matlab1,
  truss2,
  truss3,
  truss4,
  flicker2,
  flicker3,
  flicker4,
  shrink1,
  //legolab1,
  legolab2,
  legolab3,
  fbookshelf1,
  coaster1,
  fbookshelf2,
  shrink_3,
  back_board,
  cover_holder,
  ring_1,
  ring_d,
  bonsai_b6,
  bonsai_b1,
  busicards_1,
  busicards_2,
  // legolab1
} from "../images";
// import "../MainPage/App.css";
import "./Project.css";

// TODO: This is the One Pager format that Barrios is looking for. This is clunkily written, but it works.
// so just follow this and change the function name and the props (info) to match your stuff.
export function CurrentWaterSensors() {
  return OnePager({
    projectTitle: "Mesh Water Sensors",
    problem:
      "Because New Orleans floods a lot, buildings can often experience indoor flooding. Without a person or camera physically seeing flooding, it is impossible to truly detect it, leading to unwanted, expensive water damage.",
    solution:
      "Water sensors that can detect and communicate to a server will send alerts when there is water in a certain location. The server can communicate instantaneously with subscribed and dedicated users, such as building managers, to alert them of flooding.",
    image1: the3sensors,
    execution: [
      "My main job was creating the housing unit in Fusion360 to account for wires, electronics, sensors, as well as creating ways for water to be detected on all 4 sides. The device worked by having conductivity sensors, so when measuring the conductivity, a high value meant water. Because we separated each sensor by 1 cm in height, this allowed us to read the water level to the centimeter. We sent a boolean array representative of each sensor to The Things Network, which allowed a webpage to read off and display points on a map relative to each device's water level. Through a short bit of JavaScript, the array was translated into events, water level, and the battery level of the device in millivolts.",
      " This information was then accessed by a webpage, which displayed the sensors at their respective locations and indicated their water level visually on the map. In later stages of this project, we began using ReactJS to represent our sensors on a map. Throughout this project, I learned the basics of Web Development using ReactJS and how to effectively prototype with an end goal in mind.",
    ],
    images: [updatedsensor, false, mapexample, false],
   icon: updatedwatersensoricon,
  });
}
export function TrussBust() {
  return OnePager({
    projectTitle: "Truss Bust",
    problem: "Design and construct a truss structure that supports a 20-lb load, embodying support for individuals with ALS while maximixing load capacity and minimizing material usage within provided constraints.",
    solution: "My group decided that a warren truss was the structure that we would like to use.",
    image1: truss4,
    execution: ["I worked in a group and we started drawings up how we would like our bridge to support the load as well as ideal size. We used inkscape to design our members and gussets. We laser cut our pieces using an epilog engraver and 3-ply wood.", 
    "Using wood glue we were able to construct our truss carefully to match the drawing as closely as possible. Our hardwork paid off as we were able to win the award for most accurate calculations."],
    images: [truss3, false, truss2, true],
    icon: updatedwatersensoricon,
  });
}
export function Flicker() {
  return OnePager({
    projectTitle: "Flicker",
    problem: " Users with mobility and sight issues need a way to remotely turn their lights on and off without the risk of injuring themselves",
    solution: "A wall attachment that would have something that would interface with the light switch and a mechanism to connect to a remote/app that would flip the switch into the correct position on command",
    image1: flicker3,
    execution: ["Our initial thought was a small 3d printed housing unit and a rotating arm attatched to a motor. We decided to primarly use Fusion360 and arduino to control the stepper motor. We quickly learned that in order to power a stepper motor with enough torque to flip a light switch and a bluetooth reciever was quite a bit and added a bulk to the prototype ",
    "In the end, we had a semi-working prototype, which was able to accept commands from a bluetooth phone app. Unfortunately, we were unable to test its overall durability, due to the unit being heavier than antcipated because of the amount of power required to run the stepper motor."],
    images: [flicker2, false, flicker4, false],
    icon: updatedwatersensoricon,
  });
}
export function ShrinkageCalculator() {
  return OnePager({
    projectTitle: "Shrinkage Calculator",
    problem: "My partner and I wanted to find a mathematical way to help people with curly hair plan for how the weather will affect their hair, something that can be hard to predict but very important for daily planning.",
    solution: "Creating an equation that would take into account the main contributors to chnages in hair size over time",
    image1: matlab1,
    execution: ["Using the equation for estimation of shrinkage, we created functions in Matlab for both main hair types (high porosity and low porosity) to allow for user input to make the function more personalized for each user",
    "Future plans: More data for a more accurate equation"],
    images: [shrink_3, false, shrink1, false],
    icon: updatedwatersensoricon,
  });
}
export function BusiCards() {
  return OnePager({
    projectTitle: "Aluminum Business Cards",
    problem: "I wanted to showcase my abilities in a tangible way to present at networking events",
    solution: "Using the epilog engraver and anodized aluminum sheets that ",
    image1: busicards_2,
    execution: ["Created a QR code, then inverting the black and white space to make sure that when the QR code is engraved it can be scanned",
    "Worked to"],
    images: [shrink_3, false, busicards_1, false],
    icon: updatedwatersensoricon,
  });
}

export function LegoLab(){
  return ShortProject({
    title: "Lego Lab",
    imgs: [legolab2, "tall", legolab3, "short"],
    descriptions: [
      "Measured all of the pieces using calipers to get the most accurate dimensions",
      "Using Fusion360 to create and assemble the pieces with a maximum allowable interference volume of 0.001 in^3 ",
    ],
    descriptionTitles: ["Intro"],
  });
}
export function FBookshelf(){
  return(
  <div>{ShortProject({
    title: "Floating Bookshelf",
    line: true,
    imgs: [fbookshelf1, "short", fbookshelf2, "tall"],
    descriptions: [
      "Wanted to make a make to hang my books in a most aestethic way",
      "Made using an aluminum sheet, water jet, bending brake, and rivets",
    ],
    descriptionTitles: ["Intro"],
  })}
{ShortProject({
    line: false,
    imgs: [back_board, "tall", cover_holder, "tall"],
    descriptions: [
      "Made with Fusion360 using dimensions based on measurements from some of my books",
      "",
    ],
    descriptionTitles: [""],
  })}</div>)
}

export function Coaster(){
  return ShortProject({
    title: "Coaster",
    imgs: [coaster1, "short", spriterun, "small"],
    descriptions: [
      "We used Fusion360 to create ",
      "Measured all of the pieces and printed using 3D printer",
    ],
    descriptionTitles: ["Intro"],
  });
}

export function BonsaiTree(){
  return ShortProject({
    title: "Hobby: Bonsai Tree",
    imgs: [bonsai_b6, "small", bonsai_b1, "small"],
    descriptions: [
      "I wanted to get more practice in using Fusion360, so I decided to make a bonsai tree from the lego website",
      "Currently working on: Base legs for tree stand to not be a rigid joint",
    ],
    descriptionTitles: [""],
  });
}

export function AlumRing(){
  return ShortProject({
    title: "Aluminum Ring",
    imgs: [ring_1, "short", ring_d, "tall"],
    descriptions: [
      "Using aluminum stock in the CNC lathe ",
      "Operations used in conversational mode: Facing, OD Turn, Tapping, ID Turn ",
    ],
    descriptionTitles: [""],
  });
}

export function MachineManager() {
  return OnePager({
    projectTitle: "Makerspace Machine Manager",
    problem:
      "The Tulane MakerSpace always requires a way to have users both independently and safely use machines in the Space, but in January 2022, there was no longer a way to add new users or additional trainings to users, which created a problem with ensuring independence of users throughout the Space.",
    solution:
      "A web application that allows students to safely use machines through the use of authorization and a tag out system. Preferably, this system would be better than the previous, allowing for suggestions from current Fabrication Technicians.",
    image1: machinemanager,
    execution: [
      "Using ReactJS and NodeJS ensured for a database and efficient communication between the server and the client, which is crucial when users rely on the permissions set by the system. Other than transferring over data and making sure that machines could be toggled on and off, one major problem that needed to be solved was adding users.Before, users would be manually added to the system through the use of a database on a raspberry pi. Our goal for this project was to surpass this level of maintanability, so we created a page dedicated to adding users. The page is extremely easy to use, requiring a Fabrication Technician's ID as well as the new card ID. The new user has to also input some additional information, and if any slot is left out, a warning pops up beside the input box. Through the use of this page, a new user is added to the system immediately, and this can be reflected by tapping the RFID card on a reader, presenting the user's name.",
      "A large part of the MakerSpace is user independence, and part of this is training users to use certain machines and tools. Therefore, users need to be able to have trainings added, so that the system permits them to use the machines. I created the page to edit a user's training by first presenting a login page, which will only allow Fabrication Technicians or Administrators to access the edit page. Once a username is typed in, the user's trainings will appear. I decided to use a checkbox system to represent trainings as it's simple and represents exactly what is needed. Additionally, only Administrators will be able to see the \"FabTech\" Box. This software is currently in use at the Tulane MakerSpace, increasing the efficiency and user independence.",
    ],
    images: [addUser, true, editUser, false],
    icon: machinemanager,
  });
}

export function NextFavoriteArtist() {
  return OnePager({
    projectTitle: "Next Favorite Artist (nextfavartist.dev)",
    problem:
      "I really love listening to music, but I found myself listening to the same few artists all the time, and I was interested in finding new artists to listen to.",
    solution:
      "To solve this problem, I created a web application that takes in the current user's favorite artists and tracks and recommends new artists weighted on the ranking of the favorite artists.",
    image1: nextfavartist0,
    execution: [
      "I started by creating an Application on Spotify Developer, and then by using my unique code for that application, I used the Spotify API to get the user's favorite artists and tracks. I then took the top 10 favorite artists and found their 20 related artists each. Because some artists could have the same related artist, I reduced the results by name and summed their weighting based on their root artist's ranking, making a more often appearing artist have a higher value. Another problem is that the user might already be listening to these related artists, so I filtered out the top 40 artists as well as the artists of their top 50 tracks. For the sorted and weighted recommended artists, I displayed the top 20 and embedded their top track next to them.",
      "Additionally, in the user's Profile section, there is a button to create a curated playlist, which will create a playlist using these 20 songs from the recommended artists and use Spotify's seed route to add 40 related tracks. I plan to submit this application for Spotify's review to officially publish it and have it open for other users, but I have successfully found new artists that are making their way into my playlists! I consider this application a huge success because I'm both proud of it, and it's something I find super useful.",
    ],
    images: [nextfavartist1, true, nextfavartist2, true],
    icon: nextfavartist0,
  });
}

// TODO: This is a short project, just 2 pictures and 2 descs
export function JoustRemake() {
  return ShortProject({
    imgs: [joustgif, "short", spriterun, "small"],
    descriptions: [
      "For an Intro to Computer Graphics class, my teammate and I were tasked with recreating a retro game using OpenGL in C++. To start I created static images, and I messed around with the equations of motion, such as acceleration, velocity, and position. I created surface class and assigned them a hitbox along with a custom image, allowing the characters to interact with the surfaces, such as dip down beneath, land on, and bounce against on the side.",
      "Later on, we created custom sprites to mock their motions, and I created a way for those sprites to be switched through. The motions that we included were when the character jumped, fell, and ran on the ground. To assign direction (left or right), it was based on the sign of velocity. Overall, this project was super fun especially getting to interact with the bare bones of graphics and equations of motion in OpenGL.",
    ],
    descriptionTitles: ["Intro"],
    title: "Joust Remake",
  });
}

export function MoireCapstone() {
  return (
    <div>
      {ShortProject({
        title: "Moiré (Senior Capstone Project)",
        descriptions: [
          "For my senior year, I'm leading my capstone team in creating a mesh network of measurement nodes. The nodes will take abiotic measurements of the environment and report them to a database. The data consisting of soil moisture, temperature, relative humidity, and sunlight will then be visualized using a web application available to analyze and inspect the data. This technology will be dedicated to FCAT, an Ecuadorian NGO that is focusing on reforestation and biodiversity in Ecuador. By creating this technology, we are giving them the power to identify the optimal environment for their land to be reforested.",
          "For this project, we will be utilizing an ESP32 on a custom PCB, which will be powered by a solar panel and battery. The device will wake up only when it takes measurements and then communicate them via radio to the nearest node that is closest to the gateway, which will receive all the data. We will be coating the PCB to prevent water or corrosion, and we will be 3D printing an enclosure. The device will be approximately 18 cm tall and 2.5 cm wide, and to ensure that the device stays in place, it will be attached to a stake that will stick into the ground. I'm super excited to be working on this project, and I will continue to update this page as it progresses.",
        ],
        descriptionTitles: ["Intro"],
        imgs: [explanation, "tall", prototype_radio, "short"],
      })}
    </div>
  );
}

function OnePager(props) {
  let imageRight = false;
  return (
    <div className="page" align="middle">
      <div className="mobile-display">
        <div className="project-background">
          <div className="project-title">
            <h2>{props.projectTitle}</h2>
          </div>

          <div className="information-grid">
            <img
              alt="none :("
              className="project-picture"
              id="short"
              src={props.image1}
            />
            <div className="information">
              <div className="information-title">
                <h3>Problem</h3>
              </div>
              <p className="information-description">{props.problem}</p>
              <div className="information-title">
                <h3>Solution</h3>
              </div>
              <p className="information-description">{props.solution}</p>
            </div>
            {props.execution.map((exe, index) => {
              imageRight = !imageRight;
              let imageId = props.images[2 * index + 1];
              if (imageRight) {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2] || null}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Execution</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2] || null}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Conclusion</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="desktop-display">
        <div className="project-background">
          <div className="project-title">
            <h2>{props.projectTitle}</h2>
          </div>

          <div className="information-grid">
            <div className="information-row">
              <img
                alt="none :("
                className="project-picture"
                id="short"
                src={props.image1}
              />
              <div className="information">
                <div className="information-title">
                  <h3>Problem</h3>
                </div>
                <p className="information-description">{props.problem}</p>
                <div className="information-title">
                  <h3>Solution</h3>
                </div>
                <p className="information-description">{props.solution}</p>
              </div>
            </div>
            {props.execution.map((exe) => {
              imageRight = !imageRight;
              let index = props.execution.indexOf(exe);
              let imageId = props.images[2 * index + 1];
              if (imageRight) {
                return (
                  <div className="information-row">
                    <div className="information">
                      <div className="information-title">
                        <h3>Execution</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2]}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="information-row">
                    <img
                      alt="None :("
                      className="project-picture"
                      id={imageId ? "short" : "tall"}
                      src={props.images[index * 2]}
                    />
                    <div className="information">
                      <div className="information-title">
                        <h3>Conclusion</h3>
                      </div>
                      <p className="information-description">{exe}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShortProject(props) {
  return (
    <div className="page" align="middle">
      <div className="desktop-display">
        {props.title && (
          <div className="project-title">
            <h2>{props.title}</h2>
          </div>
        )}
      <div className={
            props.line === false
              ? "information-grid-no-line"
              : "information-grid"
          }
        >
          <div className="information-row">
            <img
              id={props.imgs[1] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[0] || null}
            />
            <div className="information">
              <div className="information-title">
                <h3>{props.descriptionTitles[0] || ""}</h3>
              </div>
              <p className="information-description">{props.descriptions[0]}</p>
            </div>
            <div className="information">
              <p className="information-description">{props.descriptions[1]}</p>
            </div>
            <img
              // id="short"
              id={props.imgs[3] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[2] || null}
            />
          </div>
          </div>
      </div>
      <div className="mobile-display">
        <div className="project-title">
          <h2>{props.title || ""}</h2>
        </div>
        <div className="information-grid">
          <div className="information-row">
            <div className="information">
              <div className="information-title">
                <h3>{props.descriptionTitles[0] || ""}</h3>
              </div>
              <p className="information-description">{props.descriptions[0]}</p>
              <img
                id={props.imgs[1] || ""}
                className="project-picture"
                alt=":("
                src={props.imgs[0] || null}
              />
            </div>

            <div className="information">
              <p className="information-description">{props.descriptions[1]}</p>
            </div>
            <img
              // id="short"
              id={props.imgs[3] || ""}
              className="project-picture"
              alt=":("
              src={props.imgs[2] || null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
