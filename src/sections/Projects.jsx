import SectionHeader from '../components/SectionHeader';
import GradientText from '../components/GradientText';
import ProjectFeature from '../components/ProjectFeature';

export default function Projects() {
  return (
    <>
      <section>
        <SectionHeader text="projects" />
        <GradientText
          properties="from-neutral-400 via-neutral-200 to-neutral-400 text-lg mt-8 mb-4 font-semibold"
          text="in a team: "
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectFeature
            projName="Pc8th"
            techStack="Javascript | Tailwind | Express | NodeJS | SQLServer"
            about="Ecommerce store for PC parts and accessories. Implemented user authentication, many database interactions between the front-end and back-end, styles with tailwind, and contributed to custom admin dashboard."
          />
          <ProjectFeature
            projName="CanaWeather"
            techStack="HTML | CSS | Javascript | JQuery | Firebase"
            about="Canadian weather web app storing data users locations in Firebase.  Implemented OpenWeatherMap API to make restful calls and display current weather, forecast, and check if locations exist on user.  Designed and styled the page using CSS and JQuery."
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
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, purus nec ultricies fermentum, nunc nisl ultricies"
          />
          <ProjectFeature
            projName="Personal Portfolio"
            techStack="React | TailwindCSS | Vercel"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, purus nec ultricies fermentum, nunc nisl ultricies"
          />
        </div>
      </section>
    </>
  );
}
