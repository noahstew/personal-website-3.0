import GradientText from "../components/GradientText";
import LinkIcon from "../components/LinkIcon";

export default function Header() {
  return (
    <>
      <div className="bg-transparent">
        <div>
          <div className="flex flex-wrap">
            <div>
              <GradientText
                properties="text-3xl mt-8 font-semibold from-neutral-200 via-neutral-100 to-neutral-400"
                text="hey there,"
              />
              <GradientText
                properties="text-5xl font-bold from-neutral-300 via-neutral-100 to-neutral-300"
                text="i am noah"
              />
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-b from-lime-400 via-green-400 to-green-500 rounded-full w-4 h-4 text-neutral-400"></div>
                <p className="text-md text-neutral-300 m-1">
                  available for work
                </p>
              </div>
              <GradientText
                properties="from-neutral-300 via-neutral-300 to-neutral-400 mt-4 font-semibold"
                text="Computer & Data Science @ University of British Columbia"
              />
              <GradientText
                properties="from-neutral-400 to-neutral-400"
                text="excited by software engineering & machine learning"
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src="/Profile.jpg"
                alt="Noah Stewart"
                className="rounded-full border-4 border-neutral-300 my-6 mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "128px", 
                  aspectRatio: "1/1", 
                  objectFit: "cover", 
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 justify-start">
            <LinkIcon
              link="https://github.com/noahstew"
              xlmns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              path="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
            />
            <LinkIcon
              link="https://linkedin.com/in/ns-noah-stewart"
              xlmns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              path="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
            />
            <LinkIcon
              link="/NoahStewart_Resume.pdf"
              download="/NoahStewart_Resume.pdf"
              xlmns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              path="M32,122h64c7.2,0,13-5.8,13-13V29c0-6.1-2.4-11.9-6.7-16.3S92.1,6,86,6L32,6c-7.2,0-13,5.8-13,13v90 C19,116.2,24.8,122,32,122z M86.1,92h-44c-1.7,0-3-1.3-3-3s1.3-3,3-3h44c1.7,0,3,1.3,3,3S87.8,92,86.1,92z M98,17 c2.5,2.5,4.1,5.6,4.7,9H96c-3.9,0-7-3.1-7-7l0-6.7C92.4,12.9,95.5,14.5,98,17z M41.9,56h44c1.7,0,3,1.3,3,3s-1.3,3-3,3h-44 c-1.7,0-3-1.3-3-3S40.2,56,41.9,56z M41.9,71h44c1.7,0,3,1.3,3,3s-1.3,3-3,3h-44c-1.7,0-3-1.3-3-3S40.2,71,41.9,71z"
            />
            <LinkIcon
              link="mailto: njstewart22@icloud.com"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              path="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083   h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92   c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87   C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024   c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674   l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469   c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599   C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92   c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92   C462.107,387.195,462.94,397.75,456.948,404.771z"
            />
          </div>
        </div>
      </div>
    </>
  );
}
