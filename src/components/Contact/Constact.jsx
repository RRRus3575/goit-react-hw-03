import css from "./Contact.module.css";

export const Contact = ({ id, name, number, click }) => {
  const handleDelet = (e) => {
    click(e.target.name);
  };
  return (
    <li key={id}>
      {name}: {number}
      <button name={id} onClick={handleDelet} className={css.delete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
