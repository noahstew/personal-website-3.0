import SectionHeader from '../components/SectionHeader';
import GradientText from '../components/GradientText';
import ProjectFeature from '../components/ProjectFeature';

export default function Projects() {
  return (
    <>
      <section id="projects">
        <SectionHeader text="projects" />
        <GradientText
          properties="from-neutral-400 via-neutral-200 to-neutral-400 text-lg mt-8 mb-4 font-semibold"
          text="in a team: "
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectFeature
            projName="Pc8th"
            techStack="Javascript | Tailwind | Express | NodeJS | SQLServer"
            about="Mock ecommerce store for PC parts and accessories. Implemented user authentication (sign up/in), database interactions between the front-end and back-end, styles with tailwind, customer and contributed to custom admin dashboard. (Video below is from step 2 of 3, complete overview is under '304 Project Documentation.pdf' on Github)"
            imgSrc="pc8th.png"
            githubLink="https://github.com/rinmeng/PC8th"
            demoLink="https://www.youtube.com/watch?v=IUaocy2KCOk"
          />
          <ProjectFeature
            projName="CanaWeather"
            techStack="HTML | CSS | Javascript | JQuery | Firebase"
            about="Canadian weather web app storing data users locations in Firebase.  Implemented OpenWeatherMap API to make restful calls and display current weather, 5-day forecast, and check if locations exist on user.  Designed and styled the page using CSS and JQuery."
            imgSrc="weather.png"
            githubLink="https://github.com/UBCO-COSC-310-Winter-2024-T1/the-project-festival"
            demoLink="https://youtu.be/GX_xC9Zf-Wg"
          />
        </div>

        <GradientText
          properties="from-neutral-400 via-neutral-200 to-neutral-400 text-lg mt-8 mb-4 font-semibold"
          text="on my own: "
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectFeature
            projName="Side Questor"
            techStack="Dart | Flutter | HiveDB"
            about="Original full stack android/iOS application which gamify's a Todo List with dynamic progress bars. Users can manage their categories by creating them by typing a name, picking from a list of icons and colors or delete by swiping on them on the delete screen. They can then add their quests to these custom categories, track, and manage their quests on the home screen."
            imgSrc="sidequestor.png"
            githubLink="https://github.com/noahstew/quest_manager_app"
            demoLink="https://youtu.be/9aOBoY49_Xg"
          />
          <ProjectFeature
            projName="Personal Portfolio"
            techStack="React | Tailwind | Vercel"
            about="This website!  Utilized custom React components, hooks and props to build responsive, intuitive and minimalistic and design with custom animations.  Deployed/hosted on Vercel."
            imgSrc="portfolio.png"
            githubLink="https://github.com/noahstew/personal-website-3.0"
            demoLink=""
          />
        </div>
      </section>
    </>
  );
}
