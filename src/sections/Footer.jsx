import SocialDashboard from '../components/SocialDashboard';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section
        id="contact"
        className="flex flex-col justify-center items-center text-center"
      >
        <p className="text-neutral-300 text-lg font-semibold mt-16 mb-2">
          &copy; {year == 2024 ? '2024' : `2024-${year}`} designed & developed
          by Noah Stewart
        </p>
        <div className="flex flex-row gap-2 mt-4 justify-start mb-16">
          <SocialDashboard />
        </div>
      </section>
    </>
  );
}
