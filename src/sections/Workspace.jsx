import GradientText from "../components/GradientText";
import SectionHeader from "../components/SectionHeader";
import TechIcon from "../components/TechIcon";

export default function Workspace() {
  return (
    <>
      <div>
        <SectionHeader text="workspace" />
        <GradientText
          properties="text-lg mt-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="favourite technologies"
        />
        <div className="flex flex-wrap gap-2 justify-between ">
          <TechIcon name="typescript" />
          <TechIcon name="react" />
          <TechIcon name="tailwind" />
          <TechIcon name="nextjs" />
          <TechIcon name="nodejs" />
          <TechIcon name="expressjs" />
          <TechIcon name="flutter" />
          <TechIcon name="git" />
        </div>
        <GradientText
          properties="text-lg mt-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="for data science"
        />
        <div className="flex flex-wrap gap-2 justify-between ">
          <TechIcon name="python" />
          <TechIcon name="pandas" />
          <TechIcon name="numpy" />
          <TechIcon name="seaborn" />
          <TechIcon name="matplotlib" />
          <TechIcon name="tensorflow" />
          <TechIcon name="r" />
          <TechIcon name="excel" />
        </div>
        <GradientText
          properties="text-lg mt-2 font-semibold from-neutral-500 via-neutral-300 to-neutral-500"
          text="other tools i've used"
        />
        <div className="flex flex-wrap gap-2 justify-between ">
          <TechIcon name="java" />
          <TechIcon name="html" />
          <TechIcon name="css" />
          <TechIcon name="javascript" />
          <TechIcon name="sql" />
          <TechIcon name="postgressql" />
          <TechIcon name="mysql" />
          <TechIcon name="firebase" />
        </div>
      </div>
    </>
  );
}
