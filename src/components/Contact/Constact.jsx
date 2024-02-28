import css from "./Contact.module.css";

export const Contact = ({ id, name, number, click }) => {
  const handleDelete = (id) => {
    click(id);
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
