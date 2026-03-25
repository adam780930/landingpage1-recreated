import ReactMarkdown from 'react-markdown';
import pfp2 from '../assets/pfp2.jpg';

const aboutMeContent = `I am a passionate, highly motivated and self-driven Full-Stack software engineer living in California. My primary dev stack are: JavaScript, TypeScript, React, Angular, HTML, CSS, Rest API, Node, Express, and PostgreSQL.

I completed the engineering course with [Chegg Skills](https://www.chegg.com/skills/)(formerly known as Thinkful) in 2023 and briefly worked as a JavaScript Software Developer(contracted position) at [Apple Inc.](https://www.apple.com/) for the development of internal tools.

I am dedicated to continuous learning and improvement in the field of web development. I am always seeking new challenges and opportunities to grow. Connect with me on [Linkedin](https://www.linkedin.com/in/adam-yilin-tsai), check out my [GitHub](https://github.com/adam780930) profile, or check out the Home tab to see more of my work.`;

function AboutPage() {
  return (
    <div>
      <div className="container-lg my-auto">
        <div className="row py-5">
          <div className="col-6">
            <img
              src={pfp2}
              className="col-12 bg-light border border-dark rounded img-fluid"
              alt="Adam Tsai"
            />
          </div>

          <div className="col-6 my-auto">
            <div>
              <div className="text-center">
                <span className="display-3 bg-dark text-light border border-dark rounded">
                  Hi, I am Adam
                </span>
              </div>
              <p className="h4 bg-light text-dark border border-dark rounded px-2 mt-2">
                <ReactMarkdown>{aboutMeContent}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
