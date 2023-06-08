import React, { useState } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import dateValidation from "../../utils/dateValidation"

export default function CountingWorkouts() {
  const [workouts, setWorkouts] = useState([
    { id: '1111', date: '10.07.22', distance: '5.7' },
    { id: '2222', date: '11.07.22', distance: '5.6' },
    { id: '3333', date: '12.07.22', distance: '3.4' },
  ]);

  const [edit, setEdit] = useState({});

  const addHandler = (workout) => {
    setEdit({});
    if (!dateValidation(workout.date)) {
      alert('Введите корректное значение даты..');
      return;
    }
    if (workouts.some((el) => el.date === workout.date)) {
      setWorkouts((prevWorkouts) => prevWorkouts.map((obj) => {
        if (obj.date === workout.date) {
          return {
            id: workout.id,
            date: obj.date,
            distance: +obj.distance + +workout.distance
          }
        }
        return obj
      }))
    } else {
      setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
    }
  };

  const deletionHandler = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  }

  const editigHandler = (id) => {
    const elem = workouts.find((el) => el.id === id);
    if (Object.keys(edit).length === 0) {
      setEdit(elem);
      deletionHandler(id);
    }
  }

  return (
    <React.Fragment>
      <Form addWorkout={addHandler} edit={edit} />
      <Table workouts={workouts} onRemove={deletionHandler} onEdit={editigHandler} />
    </React.Fragment>
  )
}