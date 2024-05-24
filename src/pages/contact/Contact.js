import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/Footer";

/**
 * Represents the Contact page component.
 * Displays a contact form and contact information side by side.
 *
 * @component
 * @param {string} name - The name of the contact person.
 * @param {string} email - The email address of the contact person.
 * @param {string} location - The location of the contact person.
 */

const Contact = ({ name, email, location }) => {
  return (
    <>
      <main className="contact container">
        <PageHeader title="Contact" description="Get in touch" />
        <div className="contactWrap container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Form />
            </div>
            <div className="col-12 col-lg-6">
              <ContactInfo name={name} location={location} email={email} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
