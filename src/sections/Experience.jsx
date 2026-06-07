import ExperienceCard from '../components/ExperienceCard';
import SectionHeader from '../components/SectionHeader';
import ProjectAccordion from '../components/ProjectAccordion';
import ProjectFeature from '../components/ProjectFeature';

function Experience() {
  return (
    <>
      <section id="experience">
        <SectionHeader text="experience" />
        <div className="mt-8">
          <ExperienceCard
            position="Software Engineer Co-op"
            company="NB Power"
            department="Mace's Bay, NB"
            timeframe="May 2025 - Aug 2026 | 1y 4mo"
            impact="Point Lepreau Nuclear Generating Station - IT Innovation & Plant Modernization"
            imgSrc="/nb_power.png"
          />
        </div>
        <div className="mt-4 mb-8">
          <ProjectAccordion title="freelance work: ">
            <ProjectFeature
              projName="InspirED CMS"
              techStack="NextJS | TypeScript | Tailwind | Supabase | Vercel"
              about="Custom content management system for university club to manage their website.  Custom features include a linktree style landing page, blog (editable by admin dashboard).  Collaborated with InspirED to deliver a website to gather requirements and satisfy there use cases."
              imgSrc="inspired.png"
              githubLink="https://github.com/noahstew/inspiredsk"
              demoLink="https://inspiredsk.ca/"
            />
            <ProjectFeature
              projName="High Noon Optimist Club CMS"
              techStack="NextJS | TypeScript | Tailwind | Supabase | Vercel"
              about="Custom content management system for local Optimist Club to manage their website.  Custom features include a blog and gallery (editable by admin dashboard) along with email notifications for form submissions.  Collaborated with the High Noon Optimist Club to gather requirements and satisfy their use cases."
              imgSrc="highnoon.png"
              githubLink="https://github.com/noahstew/high-noon"
              demoLink="https://highnoonocregina.ca/"
            />
          </ProjectAccordion>
        </div>
      </section>
    </>
  );
}
export default Experience;
