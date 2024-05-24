import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const personalDetails = {
    name: "Turman Nurzhigit",
    location: "Almaty",
    email: "nurzigitturman@gmail.com",
    brand:
      "Здесь будет описание об моих проектах",
  };

  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLoader(false);
    }
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 Back to my Portfolio!";
      } else {
        document.title = originalTitle;
      }
    };

    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Landing
                  name={personalDetails.name}
                  tagline={personalDetails.tagline}
                />
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/resume"
              element={<Resume brand={personalDetails.brand} />}
            />

            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route
              path="/portfolio/:projectTitle"
              element={<ProjectDetails />}
            />
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
