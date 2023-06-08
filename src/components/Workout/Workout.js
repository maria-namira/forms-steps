export default function Workout(props) {
  const {data, onRemove, onEdit} = props;
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.distance}</td>
      <td>
        <a onClick={() => onEdit(data.id)} className="edit__btn" href="#0">&#9998;</a>
        <a onClick={() => onRemove(data.id)} className="remove__btn" href="#0">&#10008;</a>
      </td>
    </tr>
  )
}