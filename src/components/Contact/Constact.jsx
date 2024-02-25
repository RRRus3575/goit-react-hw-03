import css from "./Contact.module.css";

export const ContactRender = ({ onClick, contacts }) => {
  return (
    <ul>
      {contacts.map((el) => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            name={el.id}
            onClick={(e) => {
              onClick(e.target.name);
            }}
            className={css.delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactRender;
