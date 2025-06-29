import GradientText from '../components/GradientText';
import SocialDashboard from '../components/SocialDashboard';
export default function Header() {
  return (
    <>
      <section id="about" className="bg-transparent">
        <div>
          <div className="flex flex-wrap justify-between">
            <div>
              <GradientText
                properties="text-3xl mt-12 font-semibold from-neutral-200 via-neutral-100 to-neutral-400"
                text="hey there,"
              />
              <GradientText
                properties="text-5xl font-bold from-neutral-300 via-neutral-100 to-neutral-300"
                text="i am noah"
              />
              <div className="flex items-center space-x-2">
                {/*for available from-yellow-400 via-orange-400 to-orange-500 */}
                {/*for incoming  from-yellow-400 via-orange-400 to-orange-500 */}
                <div className="bg-gradient-to-br from-red-500 via-red-400 to-red-600 rounded-full w-4 h-4 text-neutral-400"></div>
                <p className="text-md text-neutral-300 m-1">
                  full stack developer @ NB Power
                  {/* <a
                    className="font-semibold text-neutral-300 hover:text-neutral-400"
                    href="https://www.nbpower.com/Welcome.aspx?lang=en"
                    target="_blank"
                  >
                    NBPower
                  </a> */}
                </p>
              </div>
              <GradientText
                properties="from-neutral-300 via-neutral-300 to-neutral-400 mt-4 font-semibold"
                text="Computer & Data Science @ University of British Columbia"
              />
              <GradientText
                properties="from-neutral-400 to-neutral-400"
                text="excited by web and mobile development"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Profile.jpg"
                alt="Noah Stewart"
                className="rounded-full border-4 border-neutral-300 my-6"
                style={{
                  width: '100%',
                  maxWidth: '128px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 justify-start">
            <SocialDashboard />
          </div>
        </div>
      </section>
    </>
  );
}
