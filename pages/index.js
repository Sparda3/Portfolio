import Layout from "../Components/Layout";
import { experiences, skills } from "../profile";

const index = () => {
  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-13">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="YOO 3.0.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Nicolas Figueroa</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Soy un apasionado del Desarrollo Web Full Stack con
                  habilidades destacadas en el uso de tecnologías clave como
                  JavaScript, React.js Redux, Express, PostgreSQL, Sequelize y
                  Node.js. Mi experiencia se basa en la creación de soluciones
                  robustas y dinámicas, donde combino mi conocimiento técnico
                  con una mentalidad orientada a resultados. He trabajado tanto
                  en grupo como individualmente en proyectos significativos que
                  abarcan tanto el desarrollo frontend como el backend, lo que
                  me ha permitido perfeccionar mis habilidades y enfrentar
                  desafíos complejos de manera efectiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second Section SKILLS Y EXPERIENCE */}

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>

              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experiencia</h1>
              <ul>
                {experiences.map(({ title, description, from, to }, i) => (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {from} - {to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section PORTFOLIO */}

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>

              <div className="col-md-4 py-1 mx-auto">
                <div className="card">
                  <div className="overflow">
                    <img src="Food.jpg" alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>Food-Express</h3>
                    <p>
                      App de comida para restaurantes creada con React,
                      JavaScript y mucho mas.
                    </p>
                    <a href="https://foodexpress-alpha.vercel.app"> Ver mas </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
