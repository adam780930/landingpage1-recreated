import reservation from "../assets/res.png";
import recipe from "../assets/reci.png";
import flashcard from "../assets/fla.png";
import decoder from "../assets/dec.png";

const projects = [
  {
    src: reservation,
    title: "Restaurant Reservation App",
    url: "https://reservationapp.adamtsaidev.com/",
  },
  {
    src: flashcard,
    title: "Flashcard App",
    url: "https://flashcardapp.adamtsaidev.com/",
  },
  {
    src: decoder,
    title: "Decoder App",
    url: "https://decoderapp.adamtsaidev.com/",
  },
  {
    src: recipe,
    title: "Recipe App",
    url: "https://recipeapp.adamtsaidev.com/",
  },
];

function ProjectExamples() {
  return (
    <div>
      <div className="h4 mb-3">React Projects</div>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-6 border border-dark btn-secondary"
              role="button"
              onClick={() => window.open(project.url)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.src}
                alt={project.title}
                title={project.title}
                className="col-md-auto my-3 img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectExamples;
