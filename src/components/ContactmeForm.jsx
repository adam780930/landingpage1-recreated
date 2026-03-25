import emailjs from 'emailjs-com';

function ContactmeForm() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_xtgzfki',
      'template_9ll93ma',
      e.target,
      'user_kh1diuAotFnI96MCgonLa'
    );
    e.target.reset();
    alert('Thank you for your message!');
  }

  return (
    <section>
      <form
        className="w-50 mx-auto mt-5 px-2 py-2 border border-dark rounded bg-light"
        onSubmit={handleSubmit}
      >
        <header className="my-2 text-center">
          <span className="h1">Contact me</span>
        </header>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            required
            id="subject"
            name="subject"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            required
            rows="5"
            name="message"
            className="form-control"
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="submit" className="btn btn-dark">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactmeForm;
