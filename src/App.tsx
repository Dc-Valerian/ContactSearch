// App.tsx
import React from "react";
import ContactList from "./pages/Contact/ContactList";
import { Contact } from "./pages/Contact/Contact";

const contacts: Contact[] = [
  { id: 1, name: "John Doe", number: "123-456-7890" },
  { id: 2, name: "Jane Smith", number: "987-654-3210" },
  { id: 3, name: "Amidat", number: "987-654-3210" },
  { id: 4, name: "Austin", number: "987-654-3210" },
  { id: 5, name: "Valerian", number: "987-654-3210" },
  // Add more contacts
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
