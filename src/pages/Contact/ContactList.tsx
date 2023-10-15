import React, { useState, useEffect } from "react";
import { Contact } from "./Contact";

const ContactList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Contact[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [showAllContacts, setShowAllContacts] = useState(false);
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    name: "",
    number: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [favorites, setFavorites] = useState<Contact[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      const defaultContacts: Contact[] = [
        { id: 1, name: 'John Doe', number: '123-456-7890' },
        { id: 2, name: 'Jane Smith', number: '987-654-3210' }
      ];
      setContacts(defaultContacts);
      localStorage.setItem('contacts', JSON.stringify(defaultContacts));
    }
  }, []);

  // Load contacts from the JSON file on component mount
  useEffect(() => {
    fetch("/path-to-your-json-file/contacts.json") // Replace with the actual path
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error loading contacts:", error));
  }, []);

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

  const handleShowAllContacts = () => {
    if (showAllContacts) {
      setSearchResults([]); // Clear the results
    } else {
      setSearchResults(contacts); // Set the results to all contacts
    }
    setNotFound(false); // Reset the "not found" state
    setShowAllContacts(!showAllContacts); // Toggle the showAllContacts state
  };

  const handleSaveContact = () => {
    if (newContact.name && newContact.number) {
      if (newContact.number.length >= 11) {
        // Check if the name has already been saved
        if (contacts.some(contact => contact.name === newContact.name)) {
          setSuccessMessage('Name has already been saved');
        } else {
          // Create a copy of the existing contacts and add the new contact
          const updatedContacts = [...contacts, newContact];
  
          // Update the state with the new contacts
          setContacts(updatedContacts);
  
          // Clear the new contact fields after saving
          setNewContact({ id: 0, name: '', number: '' });
  
          // Save the updated contacts to local storage
          localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  
          setSuccessMessage('Contact has been added successfully');
        }
      } else {
        setSuccessMessage('Number is not complete (at least 11 characters required)');
      }
    }
  };


// const handleSaveContact = () => {
//     if (newContact.name && newContact.number) {
//       if (newContact.number.length >= 11) {
//         if (contacts.some(contact => contact.name === newContact.name)) {
//           setSuccessMessage('Name has already been saved');
//         } else {
//           const updatedContacts = [...contacts, newContact];
//           setContacts(updatedContacts);
//           setNewContact({ id: 0, name: '', number: '' });
//           localStorage.setItem('contacts', JSON.stringify(updatedContacts));
//           setSuccessMessage('Contact has been added successfully');
//         }
//       } else {
//         setSuccessMessage('Number is not complete (at least 11 characters required)');
//       }
//     }
//   };

  
  const handleDeleteContact = (id: number) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };
  

  const handleToggleFavorite = (id: number) => {
    const updatedFavorites = [...favorites];
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      const existingIndex = favorites.findIndex(fav => fav.id === id);
      if (existingIndex !== -1) {
        // Remove from favorites
        updatedFavorites.splice(existingIndex, 1);
      } else {
        // Add to favorites
        updatedFavorites.push(contact);
      }
      setFavorites(updatedFavorites);
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
      <button onClick={handleShowAllContacts}>
        {showAllContacts ? "Hide All Contacts" : "Show All Contacts"}
      </button>
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

      <h2>Add New Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Number"
        value={newContact.number}
        onChange={(e) =>
          setNewContact({ ...newContact, number: e.target.value })
        }
      />
      <button onClick={handleSaveContact}>Save Contact</button>

      {successMessage && <p>{successMessage}</p>}

      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            <span
              role="img"
              aria-label="Favorite"
              onClick={() => handleToggleFavorite(contact.id)}
              style={{
                cursor: 'pointer',
                backgroundColor: favorites.some(fav => fav.id === contact.id) ? 'red' : 'transparent'
              }}
            >
              ❤️
            </span>
          </li>
        ))}
      </ul>

      <h2>Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name} - {favorite.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
