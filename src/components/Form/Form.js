import '../Form/Form.scss'
import React, { useState } from "react";
import PropTypes from 'prop-types'
import shortid from "shortid";
import WorkoutModel from "../../models/WorkoutModel";

export default function Form({ addWorkout, edit }) {
  const [form, setForm] = useState({ date: '', distance: '', });

  if (Object.keys(edit).length !== 0 && form.id !== edit.id) {
    setForm({ id: edit.id, date: edit.date, distance: edit.distance })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let workout;
    if (Object.keys(edit).length === 0) {
      workout = new WorkoutModel(shortid.generate(), form.date, form.distance);
    } else {
      workout = new WorkoutModel(edit.id, form.date, form.distance);
    }
    addWorkout(workout);
    setForm({ date: '', distance: '' });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label htmlFor="date" className="form__label">Дата (ДД.ММ.ГГ)</label>
        <input onChange={handleChange} id="data" type="text" className="form__input" name="date" value={form.date} required></input>
      </div>
      <div className="form__item">
        <label htmlFor="distance" className="form__label">Пройдено км</label>
        <input onChange={handleChange} id="distance" type="number" className="form__input" name="distance" value={form.distance} required></input>
      </div >
      <div className="form__item">
        <button className="form__button">OK</button>
      </div>
    </form >
  )
}

Form.propTypes = {
  addWorkout: PropTypes.func.isRequired,
  edit: PropTypes.object.isRequired
}