import React, { useState } from "react";
import shortid from "shortid";
const List = () => {
  const [arr, setArr] = useState(["First", "Second", "Third"]);
  const [value, setValue] = useState("");

  const result = arr.map((element, index) => {
    return <p key={shortid.generate()}>{element}</p>;
  });

  const add = () => {
    setArr([...arr, value]);
  };

  const inputValue = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    event.target.reset();
  };
  const del = () => {
    arr.pop();
    setArr([...arr]);
  };

  return (
    <div>
      <form>
        <div> count: {arr.length}</div>
        {result}
      </form>
      <form
        onSubmit={inputValue}
        style={{ display: "flex", flexDirection: "column", width: 300 }}
      >
        <input
          type="text"
          name="element"
          required="required"
          value={value}
          placeholder="Название"
          onChange={inputValue}
        />
        <button type="submit" disabled={!value} onClick={() => add()}>
          Добавить
        </button>
        <button type="button" onClick={() => del()}>
          Убрать
        </button>
      </form>
    </div>
  );
};

export default List;
