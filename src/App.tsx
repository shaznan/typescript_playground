import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";

function App() {
  //  *Type inference, (typescript will define the types for you)
  const [number, setNumber] = useState(5);
  const changeNumber = () => {
    setNumber(5);
  };

  //** Manually defining types */
  // const [number, setNumber] = useState<number | string>(5);
  // const changeNumber = () => {
  //   setNumber('10');
  // };

  //**Object types are infered in the below black */
  // const [people, setPeople] = useState([
  //   {
  //     name: "Lebron James",
  //     url: "",
  //     age: 36,
  //     note: "Allergic to staying on the same team",
  //   },
  //   {
  //     name: "Kobe Brayant",
  //     url: "",
  //     age: 36,
  //   },
  // ]);

  // if u try to give a string to the age property TS will complain
  // people.map((people)=>{
  //   return people.age = 23
  // })

  //** Manlually setting types within the place where state is initialized */

  // const [people, setPeople] = useState<{ age: number; name: string }[]>([]);

  // // if u try to give a string to the age property TS will complain
  // people.map((people) => {
  //   return (people.age = 23);
  // });

  //**Doing the same above with TS Interface (most effective) */
  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "lebrone James",
      age: 33,
      url: "https://avatars.githubusercontent.com/u/74103414?v=4",
      note: "this is a test note",
    },
  ]);

  // people.map((people) => {
  //   return (people.age = 23);
  // });

  return (
    <div className="App">
      <h1>People invited me to party </h1>
      <List people={people} />
    </div>
  );
}

export default App;
