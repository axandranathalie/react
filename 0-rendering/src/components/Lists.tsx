type persons = {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Lists = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
  const persons: persons[] = [
    {name: "Alexandra", age: 30, isMarried: false},
    {name: "Adnan", age: 35, isMarried: false},
    {name: "Erik", age: 40, isMarried: true},
    {name: "Sara", age: 12, isMarried: false},
    {name: "Lisa", age: 17, isMarried: false},
    {name: "diana", age: 45, isMarried: true}
  ]
  //ett sätt att skriva på 
  // const lis = numbers.map((n) => {
  //   return <li>{n}</li>
  // });
  
  
  // return <ul>{lis}</ul>



  // ett sätt att skriva på
return ( <>
<ul>
  {numbers.map((n, i) =>(
    <li key={i}>{n}</li>
  ))}
</ul>

<div className="persons">
  {persons.map((persons) => 
    <div key={persons.name}>
      <h3>{persons.name}</h3>
      <p>{persons.age}</p>
      <input type="checkbox" checked={persons.isMarried} />
    </div>
    )}
</div>

</>
)
};