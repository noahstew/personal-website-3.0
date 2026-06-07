import SectionHeader from '../components/SectionHeader';
import ProjectAccordion from '../components/ProjectAccordion';
import ProjectFeature from '../components/ProjectFeature';

export default function Projects() {
  return (
    <>
      <section id="projects">
        <SectionHeader text="projects" />

        <div className="mt-8">
          <ProjectAccordion title="on my own: ">
            {/* <ProjectFeature
              projName="TrueFalseAPI"
              techStack="Javascript | Express | Supabase"
              about="API containing 200+ true/false questions with answers and sources.  Open API for anyone to use, with a documentation page to show how to use the API.  Also added a suggestion page to receive ideas from public users to add to the API which can be automatically added by an admin on approval.  Used Express to manage endpoints and Supabase to store the data."
              imgSrc="truefalse.png"
              demoLink="https://true-false-api.vercel.app/"
            /> */}
            <ProjectFeature
              projName="Crypto Sandbox"
              techStack="Typescript | React | Express | Socket.io"
              about="Mock cryptocurrency trading platform built with real-time price updates and a virtual portfolio.  Users can create an account, view live cryptocurrency prices, and buy/sell cryptocurrencies to manage their virtual portfolio.  Implemented real-time price updates using Socket.io, Express to manage backend operations and React for the frontend interface."
              imgSrc="crypto-sandbox.png"
              githubLink="https://github.com/noahstew/mock-crypto-trader"
              demoLink="https://crypto-sandbox.vercel.app/"
            />
            <ProjectFeature
              projName="Gominder"
              techStack="Golang | SQLite"
              about="Gominder is a command-line tool built in Go that helps users set reminders for important tasks and events.  Using goroutines and channels to manage events in the background of your computer, users can send themselves MacOS notification's from the terminal efficiently for future reminders.  See the GitHub README for installation instructions and usage examples."
              imgSrc="gominder.png"
              githubLink="https://github.com/noahstew/gominder"
            />
            {/* <ProjectFeature
              projName="Personal Portfolio"
              techStack="React | Tailwind | Node | Vercel"
              about="This website!  Utilized custom React components, hooks and props for easy duplication and dynamic website.  Styled with TailwindCSS to make website responsive, intuitive and minimalistic with custom animations.  Used Node for package management and testing the website locally during development.  Deployed to Vercel and configured DNS for custom domain."
              imgSrc="portfolio.png"
              githubLink="https://github.com/noahstew/personal-website-3.0"
              demoLink=""
            /> */}
            <ProjectFeature
              projName="Survivordle"
              techStack="Python | Beautiful Soup | Postgres"
              about="Wordle-style Fan Game for the show Survivor! Built functions to scrape and populate a database of 1000+ rows of contestant data.  Then used this data to build a replayable Survivor-themed wordle-style game. "
              imgSrc="survivordle.png"
              githubLink="https://github.com/noahstew/survivordle"
              demoLink="https://survivordle.vercel.app"
            />
            <ProjectFeature
              projName="Side Questor"
              techStack="Dart | Flutter | HiveDB"
              about="Original android/iOS application which gamify's a Todo List with dynamic progress bars. Users can manage their categories by creating them and typing a name, picking from a list of set icons and colors or delete by swiping on them on the delete screen. They can then add their quests to these custom categories, track, and manage their quests on the home screen.  Stored user categories and tasks locally to the device with HiveDB. Utilized Flutter state-management across screens and widgets to ensure consistency throughout the app."
              imgSrc="sidequestor.png"
              githubLink="https://github.com/noahstew/quest_manager_app"
              demoLink="https://youtu.be/9aOBoY49_Xg"
            />
          </ProjectAccordion>
          <ProjectAccordion title="in a team: ">
            <ProjectFeature
              projName="3 Big Booms"
              techStack="Unity | C#"
              about="For the '2025 COSC-416 Retro Twist Game Jam', my team and I created a 2D Combat-Puzzle Platformer inspired by Bomberman.  The game consists of 2 levels where the player must explore a world to defeat a boss.  My contributions include the design and implementation of all UI Screens (Title, Win and Lose), dynamically shifting HUD based on User's loadout/health, custom art/animations and game logic for handling navigation between scenes. "
              imgSrc="3bb.png"
              githubLink="https://github.com/EAgno/COSC416-Project"
              demoLink="https://stewdio.itch.io/3-big-booms"
            />
            <ProjectFeature
              projName="Pc8th"
              techStack="Javascript | Tailwind | Express | NodeJS | SQLServer"
              about="Mock ecommerce store for PC parts. Implemented user authentication (sign up/in), database interactions for adding, updating and querying users and products, styles with tailwind, customer and contributed to custom admin dashboard restricted to one user who had special operations on the application. (Video below is from step 2 of 3, complete overview is under '304 Project Documentation.pdf' on Github)"
              imgSrc="pc8th.png"
              githubLink="https://github.com/rinmeng/PC8th"
              demoLink="https://www.youtube.com/watch?v=IUaocy2KCOk"
            />
            {/* <ProjectFeature
              projName="CanaWeather"
              techStack="HTML | CSS | Javascript | JQuery | Firebase"
              about="Weather web app supporting Canadian locations that authenticates and saves users favourites locations with Firebase.  Implemented OpenWeatherMap API to make RESTFUL calls to receive current weather, 5-day forecast, and check if locations exist.  Minimalized response to make using the data and checking for locations on search easily.  Designed and styled the viewing weather page that dynamically changes for locations and user preferences using HTML, CSS and JQuery."
              imgSrc="weather.png"
              githubLink="https://github.com/UBCO-COSC-310-Winter-2024-T1/the-project-festival"
              demoLink="https://youtu.be/GX_xC9Zf-Wg"
            /> */}
          </ProjectAccordion>
        </div>
      </section>
    </>
  );
}
