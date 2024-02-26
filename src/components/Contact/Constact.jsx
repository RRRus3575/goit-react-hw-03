import css from "./Contact.module.css";

export const Contact = ({ onClick, contacts }) => {
  const handleDelet = (e) => {
    onClick(e.target.name);
  };

  return contacts.map((el) => (
    <li key={el.id}>
      {el.name}: {el.number}
      <button name={el.id} onClick={handleDelet} className={css.delete}>
        Delete
      </button>
    </li>
  ));
};

export default Contact;
