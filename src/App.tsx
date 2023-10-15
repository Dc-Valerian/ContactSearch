// App.tsx
import React from "react";
import ContactList from "./pages/Contact/ContactList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};

export default App;
