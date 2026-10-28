import SectionHeader from '../components/SectionHeader';
import ProjectAccordion from '../components/ProjectAccordion';
import ProjectFeature from '../components/ProjectFeature';

export default function Projects() {
  return (
    <>
      <section id="projects">
        <SectionHeader text="projects " />

        <div className="mt-8">
          <ProjectAccordion title="on my own">
            <ProjectFeature
              projName="Mock Bank API "
              techStack="Go | PostgreSQL | Docker | GitHub Actions"
              about="A backend for a fake bank, built while working through a Go backend course. Users can sign up, log in securely, and send money between accounts. I set up automatic testing so every code change gets checked, utilized sqlc to generate code, and used token authentication in both JWT and PASETO to validate requests."
              imgSrc="bank.jpg"
              githubLink="https://github.com/noahstew/mock-bank-api"
              demoLink=""
            />
            <ProjectFeature
              projName="Survivordle"
              techStack="Python | Beautiful Soup | Postgres"
              about="Wordle-style Fan Game for the show Survivor! Built functions to scrape and populate a database of 1000+ rows of contestant data.  Then used this data to build a replayable Survivor-themed wordle-style game. The frontend was built in React and deployed with Vercel, with the data being stored in a Neon DB.  "
              imgSrc="survivordle.png"
              githubLink="https://github.com/noahstew/survivordle"
              demoLink="https://survivordle.vercel.app"
            />
          </ProjectAccordion>
          <ProjectAccordion title="in a team">
            <ProjectFeature
              projName="UBC Courseplanner"
              techStack="Typescript | React | Remix | Prisma | MySQL"
              about="During a Directed Studies term from Jan-Apr 2025, I worked on a team of 3 under Dr. Abdallah Mohamed for his Courseplanner Web Application. My contributions included transcript parsing, a central dashboard, bug reporting system and app-wide logging.  The project went live in Summer 2026 on UBC Servers and available to use by the 10,000+ student body."
              imgSrc="courseplanner.png"
              githubLink=""
              demoLink="https://courseplanner.ok.ubc.ca/home"
            />
            <ProjectFeature
              projName="3 Big Booms"
              techStack="Unity | C#"
              about="For the '2025 COSC-416 Retro Twist Game Jam', my team and I created a 2D Combat-Puzzle Platformer inspired by Bomberman.  The game consists of 2 levels where the player must explore a world to defeat a boss.  My contributions include the design and implementation of all UI Screens (Title, Win and Lose), dynamically shifting HUD based on User's loadout/health, custom art/animations and game logic for handling navigation between scenes. "
              imgSrc="3bb.png"
              githubLink="https://github.com/EAgno/COSC416-Project"
              demoLink="https://stewdio.itch.io/3-big-booms"
            />
          </ProjectAccordion>
          {/* Project Archive... */}
          {/* <ProjectFeature
              projName="TrueFalseAPI"
              techStack="Javascript | Express | Supabase"
              about="API containing 200+ true/false questions with answers and sources.  Open API for anyone to use, with a documentation page to show how to use the API.  Also added a suggestion page to receive ideas from public users to add to the API which can be automatically added by an admin on approval.  Used Express to manage endpoints and Supabase to store the data."
              imgSrc="truefalse.png"
              demoLink="https://true-false-api.vercel.app/"
            /> */}
          {/* <ProjectFeature
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
            /> */}
          {/* <ProjectFeature
              projName="Personal Portfolio"
              techStack="React | Tailwind | Node | Vercel"
              about="This website!  Utilized custom React components, hooks and props for easy duplication and dynamic website.  Styled with TailwindCSS to make website responsive, intuitive and minimalistic with custom animations.  Used Node for package management and testing the website locally during development.  Deployed to Vercel and configured DNS for custom domain."
              imgSrc="portfolio.png"
              githubLink="https://github.com/noahstew/personal-website-3.0"
              demoLink=""
            /> */}
          {/* <ProjectFeature
              projName="Side Questor"
              techStack="Dart | Flutter | HiveDB"
              about="Original android/iOS application which gamify's a Todo List with dynamic progress bars. Users can manage their categories by creating them and typing a name, picking from a list of set icons and colors or delete by swiping on them on the delete screen. They can then add their quests to these custom categories, track, and manage their quests on the home screen.  Stored user categories and tasks locally to the device with HiveDB. Utilized Flutter state-management across screens and widgets to ensure consistency throughout the app."
              imgSrc="sidequestor.png"
              githubLink="https://github.com/noahstew/quest_manager_app"
              demoLink="https://youtu.be/9aOBoY49_Xg"
            /> */}
        </div>
      </section>
    </>
  );
}
