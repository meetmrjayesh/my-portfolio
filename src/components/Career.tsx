import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5></h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built 3+ complete applications using React.js .Integrated
              authentication using firebase and supabase. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Major websites</h4>
                <h5>HMS (Hospital Management System)</h5>
              <h5>EasyRecall(studylab)</h5>

              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed and maintained HMS, a comprehensive hospital management system, using React.js
               and Next.js. Implemented features such as patient management, appointment scheduling, and
                billing.<br/> Contributed to the development of EasyRecall, a study aid platform, by building
                 interactive flashcards and quizzes to enhance user engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>currently working on basics of backend</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently learning backend development with a focus on Node.js and NestJS. Building
               foundational skills in API design, database management, and server-side programming 
               to complement my frontend expertise. Planning to create full-stack applications and 
               expand my skill set in backend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
