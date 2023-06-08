import '../Table/Table.scss'
import sortingByDate from "../../utils/sortingByDate";
import Workout from "../Workout/Workout";
import Proptypes from "prop-types";

export default function Table(props) {
  const { workouts, onRemove, onEdit } = props;
  return (
    <table className="table" cellSpacing={0}>
      <thead className="table__thead">
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {workouts
          .sort((a, b) => sortingByDate(a.date, b.date))
          .map((el) => <Workout key={el.id} data={el} onRemove={onRemove} onEdit={onEdit} />)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  workouts: Proptypes.array,
}