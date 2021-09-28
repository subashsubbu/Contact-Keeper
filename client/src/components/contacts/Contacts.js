import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import contactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const ContactContext = useContext(contactContext);

  const { contacts, filtered } = ContactContext;

  if (contacts.length === 0) {
    return <h4> Please add some contact </h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
