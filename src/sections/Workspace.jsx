import GradientText from '../components/GradientText';
import SectionHeader from '../components/SectionHeader';
import TechIcon from '../components/TechIcon';

export default function Workspace() {
  return (
    <>
      <section id="skills">
        <SectionHeader text="skills" />
        <GradientText
          properties="text-lg mt-6 mb-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="my favourite technologies:"
        />
        <div className="flex flex-wrap lg:gap-2 gap-6 lg:justify-between justify-start">
          <TechIcon name="typescript" link="https://www.typescriptlang.org" />
          <TechIcon name="react" link="https://react.dev" />
          <TechIcon name="tailwind" link="https://tailwindcss.com" />
          <TechIcon name="nextjs" link="https://nextjs.org" />
          <TechIcon name="golang" link="https://go.dev" />
          <TechIcon name="sql" link="https://en.wikipedia.org/wiki/SQL" />
          <TechIcon name="postgresql" link="https://www.postgresql.org" />
          <TechIcon name="docker" link="https://www.docker.com/" />
          <TechIcon name="git" link="https://git-scm.com" />
        </div>
        {/* <GradientText
          properties="text-lg mt-6 mb-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="for data science"
        />
        <div className="flex flex-wrap lg:gap-2 gap-6 lg:justify-between justify-start ">
          <TechIcon name="python" link="https://www.python.org" />
          <TechIcon name="tensorflow" link="https://www.tensorflow.org" />
          <TechIcon name="pandas" link="https://pandas.pydata.org" />
          <TechIcon name="numpy" link="https://numpy.org" />
          <TechIcon name="seaborn" link="https://seaborn.pydata.org" />
          <TechIcon name="matplotlib" link="https://matplotlib.org" />
          <TechIcon name="r" link="https://www.r-project.org" />
          <TechIcon
            name="excel"
            link="https://www.microsoft.com/en-ca/microsoft-365/excel"
          />
        </div> */}
        <GradientText
          properties="text-lg mt-6 mb-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="i also have experience in:"
        />
        <div className="flex flex-wrap lg:gap-2 gap-6 lg:justify-between justify-start">
          <TechIcon name="java" link="https://www.java.com/en/" />
          <TechIcon
            name="html"
            link=" https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <TechIcon
            name="css"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <TechIcon name="bootstrap" link="https://getbootstrap.com" />
          <TechIcon
            name="javascript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <TechIcon name="jquery" link="https://jquery.com" />
          <TechIcon name="expressjs" link="https://expressjs.com" />
          <TechIcon name="dart" link="https://dart.dev" />
          <TechIcon name="flutter" link="https://flutter.dev" />
        </div>
      </section>
    </>
  );
}
