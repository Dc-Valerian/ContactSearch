// ContactList.tsx
import React, { useState } from "react";
import { Contact } from "./Contact";

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Contact[]>([]);
  const [notFound, setNotFound] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm) {
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.number.includes(searchTerm)
      );

      if (filteredContacts.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }

      setSearchResults(filteredContacts);
    } else {
      setSearchResults([]);
      setNotFound(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or number..."
        value={query}
        onChange={handleInputChange}
      />
      {notFound ? (
        <p>Contact not found</p>
      ) : (
        <ul>
          {searchResults.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
