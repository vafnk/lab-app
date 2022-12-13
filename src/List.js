import React, { useState } from "react";
import shortid from "shortid";
import "./list.css";
const List = () => {
  const [arr, setArr] = useState(["First", "Second", "Third"]);
  const [value, setValue] = useState("");
  const [countPressDelete, setCountPressDelete] = useState(0);
  const [countPressAdd, setCountPressAdd] = useState(0);

  const result = arr.map((element, index) => {
    return <p key={shortid.generate()}>{element}</p>;
  });

  const add = () => {
    setArr([...arr, value]);
    setCountPressAdd(countPressAdd + 1);
  };

  const inputValue = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    event.target.reset();
  };
  const del = () => {
    arr.pop();
    setArr([...arr]);
    setCountPressDelete(countPressDelete + 1);
  };

  return (
    <div>
      <form>
        <div className="listHeader"> count: {arr.length}</div>
        <div className="listItem">{result}</div>
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
        <button type="button" disabled={arr.length === 0} onClick={() => del()}>
          Убрать
        </button>
      </form>
    </div>
  );
};

export default List;
