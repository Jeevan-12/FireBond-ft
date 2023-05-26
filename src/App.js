import React, { useState } from 'react';
import AddNewArg from './AddNewArg';

const App = () => {
  const [dropDownValue, setDropDownValue] = useState('');
  const [dropDownValue1, setDropDownValue1] = useState('');
  const [result, setResult] = useState('true');
  const [addOp, setAddOp] = useState([]);
  const [adddd, setAdddd] = useState([]);
  const [argumentValues, setArgumentValues] = useState([
    {
      id: 1,
      text: 'My Arg',
      name: 'name1',
      boolean: 'true',
    },
  ]);
  if (dropDownValue1 == 'argument') {
    <h1>jeevan</h1>;
  } else {
  }
  console.log(adddd);
  const Add = () => {
    return (
      <div>
        <select
          onChange={(e) => {
            setAdddd(e.target.value);
          }}
        >
          <option>select</option>
          <option>constant</option>
          <option>argument</option>
          <option>and</option>
          <option>or</option>
        </select>
        <button onClick={() => setDropDownValue('')}>X</button>
      </div>
    );
  };
  const adding = () => {
    setAddOp([...addOp, 1]);
  };
  const addNewArgument = () => {
    let newObj = {
      id: argumentValues.length + 1,
      text: '',
      name: `name${argumentValues.length + 1}`,
      boolean: 'true',
    };

    setArgumentValues([...argumentValues, newObj]);
  };

  const inputChangeHandler = (list, e, type) => {
    if (type == 'input') {
      let data = [...argumentValues];
      data[list.id - 1] = {
        id: list.id,
        name: list.name,
        text: e.target.value,
        boolean: list.boolean,
      };
      setArgumentValues(data);
    } else if (type == 'boolean') {
      let data = [...argumentValues];
      data[list.id - 1] = {
        id: list.id,
        name: list.name,
        text: list.text,
        boolean: e.target.value,
      };
      setArgumentValues(data);
    }
  };

  return (
    <div>
      <h1>Fire Bond</h1>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          {argumentValues.map((item) => {
            return (
              <AddNewArg
                item={item}
                key={item.id}
                inputChangeHandler={inputChangeHandler}
              />
            );
          })}
        </div>
        <button onClick={addNewArgument}>+ add arg</button>
      </div>

      <div>
        {dropDownValue == '' ? (
          <select
            value={dropDownValue}
            onChange={(e) => setDropDownValue(e.target.value)}
          >
            <option>select</option>
            <option>constant</option>
            <option>argument</option>
            <option>and</option>
            <option>or</option>
          </select>
        ) : dropDownValue == 'constant' ? (
          <select value={result} onChange={(e) => setResult(e.target.value)}>
            <option>true</option>
            <option>false</option>
          </select>
        ) : dropDownValue == 'argument' ? (
          <select
            value={dropDownValue}
            onChange={(e) => setDropDownValue(e.target.value)}
          >
            {argumentValues.map((item, index) => {
              return <option key={index}>{item.text}</option>;
            })}
          </select>
        ) : dropDownValue == 'and' ? (
          <div>
            <select
              value={dropDownValue}
              onChange={(e) => setDropDownValue(e.target.value)}
            >
              <option>and</option>
              <option>or</option>
            </select>
            <div>
              <select onChange={(e) => setDropDownValue1(e.target.value)}>
                <option>select</option>
                <option>constant</option>
                <option>argument</option>
                <option>and</option>
                <option>or</option>
              </select>
              <button onClick={() => setDropDownValue('')}>X</button>
            </div>

            <div>
              {' '}
              <select onChange={(e) => setDropDownValue1(e.target.value)}>
                <option>select</option>
                <option>constant</option>
                <option>argument</option>
                <option>and</option>
                <option>or</option>
              </select>
              <button onClick={() => setDropDownValue('')}>X</button>
            </div>
            {addOp.map((item, i) => {
              return item.length == 0 ? '' : <Add key={i} />;
            })}
            <button onClick={adding}>+add op</button>
            {/* {argumentValues.map((item, index) => {
              return (
                <div key={index}>
                  <select>
                    <option>select</option>
                    {argumentValues.map((item, index) => {
                      return <option key={index}>{item.text}</option>;
                    })}
                  </select>
                  <button>X</button>
                </div>
              );
            })} */}
          </div>
        ) : null}

        <button onClick={() => setDropDownValue('')}>X</button>
      </div>

      <p>result : {result}</p>
    </div>
  );
};

export default App;
