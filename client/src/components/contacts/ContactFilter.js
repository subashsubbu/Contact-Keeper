import React, { useContext, useEffect, useRef } from "react";
import contactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const ContactContext = useContext(contactContext);
  const text = useRef();

  const { filterContacts, filtered, clearFilter } = ContactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
      return <h5> No results </h5>
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder=" Filter Contacts.."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
