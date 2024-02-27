import Contact from "../Contact/Constact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact id={id} name={name} number={number} click={onClick} key={id} />
      ))}
    </ul>
  );
};

export default ContactList;
