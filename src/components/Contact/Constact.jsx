import css from "./Contact.module.css";

export const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <li key={id}>
      {name}: {number}
      <button onClick={() => handleDelete(id)} className={css.delete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
