import React, { Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {
  state = { 
    cita: {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    },
    error: false
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    // extract state data
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    
    // validations
    if(mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === "") {
      this.setState({ error: true });
      return;
    }

    // generar objeto con datos
    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuid();

    // add the new date at state
    this.props.crearNuevaCita(nuevaCita);
  }

  render() { 

    // extraer valos del state
    const { error } = this.state;


    return ( 
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          { error ? <div className="alert alert-danger mt-2 mb5 text-center"> Todos los campos son obligatorios</div> : null }

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div> {/* form-group */}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div> {/* form-group */}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div> {/* form-group */}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea 
                  className="form-control" 
                  name="sintomas" 
                  placeholder="Describe los sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>

              </div>
            </div> {/* form-group */}
            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />
          </form>
        </div>
      </div>
     );
  }
}
 
export default NuevaCita;