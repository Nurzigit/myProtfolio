import Hero from "../../components/Hero";

/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {string} name - The name of the user displayed in the Hero section.
 */

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <main className="landing container" style={styles.landing}> 
        <Hero name={name} />
      </main>
    </>
  );
};

export default Landing;
