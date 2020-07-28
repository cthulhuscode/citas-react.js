import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Crear State para Error
  const [error, setError] = useState(false);

  // Función para cambio en input
  // e - pasar el evento
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar mensaje error
    setError(false);

    // Asignar un ID
    cita.id = uuid();

    // Crear cita (colocar en State)
    crearCita(cita);

    // Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Crear cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
