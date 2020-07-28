import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
  const { mascota, propietario, fecha, sintomas, hora } = cita;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

// PropTypes
Cita.propType = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
