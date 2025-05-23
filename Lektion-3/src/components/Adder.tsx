import { useState } from "react";

export const Adder = () => {
  // här skapar vi state-variabler för inputfälten
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState<number | null>(null); // här sparas resultatet

  //funktion som körs när knappen trycks
  const handleAdd = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum); // här sparas resultatet i state
  };
  return (
    <>
    <div className="adder">
    <h1>Plussa ihop dina tal</h1>
      <input
        className="input"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Första talet"
      />
      <input
        className="input"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Andra talet"
      />
      <button className="add-button" onClick={handleAdd}>+</button>

      {result !== null && <p className="result">Resultat: {result}</p>}
      </div>
    </>
  );
};
