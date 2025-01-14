import React from "react";
import "./styles.css";

// Reusable component that accepts props for name and email
function ReusableComponent({ name, email }) {
  return (
    <div className="rectangle-container">
      <div className="name">{name}</div>
      <div className="email">{email}</div>
    </div>
  );
}

// Main component that maps over the array of people
function Datapassing() {
  const people = [
    { name: "Alan", email: "alan@gmail.com" },
    { name: "Alphy", email: "john.doe@gmail.com" },
    { name: "Jane", email: "jane.doe@gmail.com" },
    { name: "Mary", email: "mary@gmail.com" },
    { name: "Tom", email: "tom@gmail.com" },
  ];

  return (
    <div className="appContainer">
      {/* Using Array.map() to dynamically create a ReusableComponent for each person */}
      {people.map((person, index) => (
        <ReusableComponent
          key={index} // Key prop for efficient re-rendering
          name={person.name}
          email={person.email}
        />
      ))}
    </div>
  );
}

export default Datapassing;
