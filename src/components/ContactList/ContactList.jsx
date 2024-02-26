import Contact from "../Contact/Constact";
import css from "./ContactList.module.css";

export const ContactList = ({ onClick, contacts }) => {
  return (
    <ul className={css.list}>
      <Contact contacts={contacts} onClick={onClick} />
    </ul>
  );
};

export default ContactList;
