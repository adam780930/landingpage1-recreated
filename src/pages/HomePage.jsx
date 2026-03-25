import Portrait from '../components/Portrait';
import ProjectExamples from '../components/ProjectExamples';
import ContentButton from '../components/ContentButton';
import ReactMarkdown from 'react-markdown';

const aboutThisWebsiteContent = `This website is created with React, styled with BootStrap framework and built using the following libraries:
- react-router-dom
- react-markdown
- emailjs`;

function HomePage() {
  function linkOpen() {
    window.open('https://project.adamtsaidev.com');
  }

  return (
    <div>
      <div className="h2 fw-bold text-center my-5">
        Welcome to my landing page
        <Portrait />
        <ContentButton linkOpen={linkOpen} />
        <p className="h6 col-md-5 bg-light text-start text-dark border border-dark rounded mx-auto p-2 mt-2">
          <ReactMarkdown>{aboutThisWebsiteContent}</ReactMarkdown>
        </p>
        <div className="my-5">
          <ProjectExamples />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
