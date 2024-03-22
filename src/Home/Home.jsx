import "./Home.css";
import { inventario } from "../utils/medicamentos";

export function Home() {
  let nombrePaciente = "Juan Wil Santi";
  let sedePaciente = "Suramericana";
  let nombreEspecialista = "Diego";
  console.log(inventario);

  //los areglos los puedo manipular para controlar que información voy a presentar
  //1. función de filtrado de datos condicion de filtrado (Pregunta Si o No)

  inventario.filter(function () {});

  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="fuente">Servicios a un clic </h1>
            <h2 className="text-muted">
              Hola <span className="fuente">Vanne</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              vitae adipisci voluptatibus consequatur! Nisi, blanditiis.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>Medico de familia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-2 mt-4">
            <i class="bi bi-person-circle fs-1 fuente"></i>
          </div>

          <div className="col-12 col-md-10">
            <p>{nombreEspecialista}</p>
          </div>
          <div />

          <div className="row">Persona</div>
          <div className="col-12 col-md-2 mt-4">
            <i class="bi bi-person-circle fs-1 fuente"></i>
          </div>

          <div className="col-12 col-md-10">
            <p>Doctor Miguel</p>
          </div>

          <div className="row">Maletin</div>
          <div className="col-12 col-md-2 mt-4">
            <i class="bi bi-person-circle fs-1 fuente"></i>
          </div>

          <div className="col-12 col-md-2 mt-4">
            <p>Doctor Miguel</p>
          </div>

          <div className="row">Edificio</div>
          <div className="col-12 col-md-2 mt-4">
            <i class="bi bi-person-circle fs-1 fuente"></i>
          </div>

          <div className="col-12 col-md-2 mt-4">
            <p>Doctor Miguel</p>
          </div>
        </div>
      </section>
    </>
  );
}
