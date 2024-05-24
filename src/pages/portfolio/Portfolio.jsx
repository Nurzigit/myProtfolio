import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";

/**
 * Represents the Portfolio page component.
 * Displays a list of projects and allows users to view the creator's work.
 *
 * @component
 */

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <main className="portfolio container">
        <PageHeader title="Portfolio" description="View my work" />

        <div className="row">
          <ProjectList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
