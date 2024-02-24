import React, { Component } from "react";
import uniqid from "uniqid";
import Forma from "../Form/Form";
import Input from "../inputs/Input";
import ContactRender from "../ContactRender/ConstactRender";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };
  handleDelete = (nameEl) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== nameEl),
      };
    });
  };
  handleSubmit = (values) => {
    const formDate = values;
    console.log("app", formDate.name);
    if (
      this.state.contacts.find(
        (el) => el.name.toLowerCase() === formDate.name.toLowerCase()
      )
    ) {
      alert(`${formDate.name} is alredy in contacts`);
    }

    this.setState((prev) => {
      return {
        contacts: prev.contacts.concat({
          name: formDate.name,
          number: formDate.number,
          id: uniqid(),
        }),
      };
    });
  };

  handleSearch = ({ target: { value: filter } }) => {
    this.setState({
      filter,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  contactFilter = () => {
    const { filter, contacts } = this.state;

    const cont = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return cont;
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  render() {
    return (
      <div
        style={{
          margin: 50,
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <Forma submitForm={this.handleSubmit} />
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
              onChange={this.handleSearch}
              value={this.state.filter}
              type={"text"}
              name={"filter"}
              label={"Find contacts by name"}
            />

            <ContactRender
              contacts={this.contactFilter()}
              onClick={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
