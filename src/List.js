import React from "react";

const List = ({ people }) => {
  //const people = props.people;
  return (
    <div>
     {
     //!oop
      people.map(person => {
        // Destructuring
        const {id,name,age,image} = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
     
    </div>
  );
};

export default List;
