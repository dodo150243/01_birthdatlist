import React, { useState } from "react";
import List from "./List";
import data from "./data.js";
// import data2 from "./data2";

const App = () => {
  const [people, setPeople] = useState(data);  //ค่าเริ่มต้นของ state
  // const [people2, setPeople2] = useState(data2);
  const clearAll = () => {
    setPeople([]);
  };
  const chackBirthday = () => {
    setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays to day</h3>
        <List people={people} />
        {
          people.length == 0 ? (
            // <hr /> <List people={people2}/> 
            <button onClick={chackBirthday}>Chack Birth day</button>
          ) : (
            <button onClick={clearAll}>Clear all</button>
          )
        }
      </section>
    </main>
  );
};

export default App;
