import React, { useState } from 'react';

const AddNewArg = ({ item, inputChangeHandler }) => {
  const [inputValue, setInputValue] = useState(item);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        type="text"
        value={item.text}
        name={item.name}
        onChange={(e) => inputChangeHandler(item, e, 'input')}
      />
      <select
        value={item.boolean}
        onChange={(e) => inputChangeHandler(item, e, 'boolean')}
      >
        <option>true</option>
        <option>false</option>
      </select>
    </div>
  );
};

export default AddNewArg;
