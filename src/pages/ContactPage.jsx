import ContactmeForm from '../components/ContactmeForm';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactPage() {
  return (
    <section>
      <ContactmeForm />
      <div className="w-50 text-start mx-auto fa-2xl mt-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adam780930"
          role="button"
          className="me-2 text-dark"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adam-yilin-tsai"
          className="text-dark"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
