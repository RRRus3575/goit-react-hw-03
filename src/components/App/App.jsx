import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Forma from "../ContactForm/ContactForm";
import Input from "../SearchBox/SearchBox";
import ContactRender from "../Contact/Constact";

export const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem("contacts");

    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      return parsedContacts;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const handleDelete = (nameEl) => {
    setContacts((prev) => prev.filter(({ id }) => id !== nameEl));
  };

  const handleSubmit = (values) => {
    const { name, number } = values;
    if (contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    setContacts((prev) =>
      prev.concat({
        name: name,
        number: number,
        id: uniqid(),
      })
    );
  };

  const handleSearch = ({ target: { value: filter } }) => {
    setFilter(filter);
  };

  const contactFilter = () => {
    const cont = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return cont;
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        margin: 50,
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Forma submitForm={handleSubmit} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2>Contacts</h2>
          <Input
            onChange={handleSearch}
            value={filter}
            type={"text"}
            name={"filter"}
            label={"Find contacts by name"}
          />

          <ContactRender contacts={contactFilter()} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
