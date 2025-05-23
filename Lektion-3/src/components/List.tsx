import { useState } from "react"
import { Person } from "../models/person";

export const List = () => {

  const [persons,setPersons] = useState<Person[]>([
    new Person("Alexandra", 32, false),
    new Person("Mikael", 35, true),
    new Person("Lina", 28, false)
  ]);

  //lägg till person
  const addPersons = () => {
    setPersons([...persons, new Person("Adnan", 34, false)]);
  }

  //ta bort person
  const removePerson = (name: string) => {
    setPersons(persons.filter((p) => p.name !== name));
  }

  //ändra person
  const changePerson = (name: string) => {
    setPersons(
    persons.map((p) => {
      if (p.name === name) {
        return {...p, age: p.age + 1};
      }
      return p;
      }),
    );
  };

  return ( <>

  <div>
    <button onClick={addPersons}>Lägg till</button>
    {persons.map((p) => (
    <div key={p.name}>
      <h3>{p.name}</h3>
      <p>{p.age}</p>
      <button onClick={() => removePerson(p.name)}>Ta bort</button>
      <button onClick={() => changePerson(p.name)}>Ändra</button>
    </div>
    ))}
  </div>
    
    </>
  );
};