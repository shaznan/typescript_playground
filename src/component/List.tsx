import React from "react";

interface Iprops {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

//** Refcatoring into function 
//**Render list returns an array of JSX elements */

const List: React.FC<Iprops> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;

//** */Defining types outside the paramterers (most efficient way to do it)
//**Standard way to do it, in the above instead of map inside jsx, we refector into function and execute */
// const List: React.FC<Iprops> = ({ people }) => {
//   return (
//     <div>
//       {people.map((person) => {
//         return <div>{person.name}</div>;
//       })}
//     </div>
//   );
// };

// export default List;

//**Defining types inside parameters (can destructure as well) */
// function List({ people }: Iprops) {
//   return <div>list</div>;
// }

// export default List;
// **Using standard props1

// function List(props: Iprops) {
//   return <div>list</div>;
// }

// export default List;
