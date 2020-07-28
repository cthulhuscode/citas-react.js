import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Citas en Localstorage
  let citasGuardadas = JSON.parse(localStorage.getItem("citas"));
  if (!citasGuardadas) citasGuardadas = [];

  // Array State de Citas
  const [citas, setCitas] = useState(citasGuardadas);

  // useEffect: realizar ciertas operaciones cuando el State cambia.
  //  se ejecuta cuando el componente está listo y cuando hay cambios en el componente.
  useEffect(() => {
    let citasGuardadas = JSON.parse(localStorage.getItem("citas"));

    if (citasGuardadas) localStorage.setItem("citas", JSON.stringify(citas));
    else localStorage.setItem("citas", JSON.stringify([]));
  }, [citas]); // dependencias. Array vacío para que sólo se ejecute una vez

  // Tomar citas actuales y agregar nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // Eliminar cita por ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// PropTypes
// Documentar los componentes, suele hacerse en la parte de abajo.

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default App;
