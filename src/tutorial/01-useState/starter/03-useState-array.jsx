import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  console.log("data:", data);
  const [people, setPeople] = useState(data);

  function removePerson(id) {
    console.log("remove:", id);
    const updatedPeople = people.filter((person) => person.id !== id);
    console.log("updated poeple:", updatedPeople);
    setPeople(updatedPeople);
  }

  function clearAll() {
    setPeople([]);
  }

  return (
    <>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <button onClick={() => removePerson(person.id)} className="btn">
            delete {person.name}
          </button>
        </div>
      ))}
      <button onClick={() => clearAll()} className="btn">
        Delete All
      </button>
    </>
  );
};

export default UseStateArray;
