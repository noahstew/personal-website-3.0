import GradientText from '../components/GradientText';
import SectionHeader from '../components/SectionHeader';
import TechIcon from '../components/TechIcon';

export default function Workspace() {
  return (
    <>
      <section>
        <SectionHeader text="workspace" />
        <GradientText
          properties="text-lg font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="favourite technologies"
        />
        <div className="flex flex-wrap gap-2 justify-around ">
          <TechIcon name="Typescript" link="https://www.typescriptlang.org" />
          <TechIcon name="React" link="https://react.dev" />
          <TechIcon name="Tailwind" link="https://tailwindcss.com" />
          <TechIcon name="NextJS" link="https://nextjs.org" />
          <TechIcon name="NodeJS" link="https://nodejs.org/en" />
          <TechIcon name="ExpressJS" link="https://expressjs.com" />
          <TechIcon name="Flutter" link="https://flutter.dev" />
          <TechIcon name="Git" link="https://git-scm.com" />
        </div>
        <GradientText
          properties="text-lg mt-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="for data science"
        />
        <div className="flex flex-wrap gap-2 justify-around ">
          <TechIcon name="Python" link="https://www.python.org" />
          <TechIcon name="Tensorflow" link="https://www.tensorflow.org" />
          <TechIcon name="Pandas" link="https://pandas.pydata.org" />
          <TechIcon name="Numpy" link="https://numpy.org" />
          <TechIcon name="Seaborn" link="https://seaborn.pydata.org" />
          <TechIcon name="Matplotlib" link="https://matplotlib.org" />
          <TechIcon name="R" link="https://www.r-project.org" />
          <TechIcon
            name="Excel"
            link="https://www.microsoft.com/en-ca/microsoft-365/excel"
          />
        </div>
        <GradientText
          properties="text-lg mt-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="other tools i'm good at"
        />
        <div className="flex flex-wrap gap-2 justify-around ">
          <TechIcon name="Java" link="https://www.java.com/en/" />
          <TechIcon
            name="Html"
            link=" https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <TechIcon
            name="CSS"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <TechIcon
            name="Javascript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <TechIcon name="SQL" link="https://en.wikipedia.org/wiki/SQL" />
          <TechIcon name="PostgreSQL" link="https://www.postgresql.org" />
          <TechIcon name="MySQL" link="https://dev.mysql.com" />
          <TechIcon name="Firebase" link="https://firebase.google.com" />
        </div>
      </section>
    </>
  );
}
