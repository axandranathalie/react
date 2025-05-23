import { useState } from 'react'
import { Person } from '../models/person';

export const PersonMe = () => {
  const[me,setMe] = useState<Person>(new Person("Alexandra", 32, false));

  const changeAge = () => {
    setMe({...me, age: me.age + 1});
  };

  return ( <> 
  <h3>{me.name}</h3>
  <p>{me.age}</p>
  <button onClick={changeAge}>happy birthay</button>
  
  </>

  );

}
