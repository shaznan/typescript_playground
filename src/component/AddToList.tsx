import React, { useState } from "react";
import { IState as Props } from "../App";

interface Iprops {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<Iprops> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age), //turns string into number
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        name="name"
        value={input.name}
        onChange={handleChange}
        className="AddToList-input"
      />
      <input
        type="number"
        placeholder="age"
        name="age"
        value={input.age}
        onChange={handleChange}
        className="AddToList-input"
      />
      <input
        type="text"
        placeholder="url"
        value={input.url}
        name="url"
        onChange={handleChange}
        className="AddToList-input"
      />
      <textarea
        placeholder="note"
        name="note"
        value={input.note}
        className="AddToList-input"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
