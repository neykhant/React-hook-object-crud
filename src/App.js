import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const updateData = (name, id) => {
    // console.log("data",data)

    const result = data.map((dat) =>
      dat.id === id
        ? { id, firstName: name.firstName, lastName: name.lastName}
        : dat
    );

    setData(result)
    setname({firstName: "", lastName: ""})
    setEdit(null)
  };


  // console.log("result", data);

  let emptyName = "";
  const handleAdd = () => {
    // if(setname === ""){
    //   console.log("Please Enter Name.")
    //   return;
    // }

    if (!edit) {
      setData([
        ...data,
        {
          id: Math.random() * 10,
          firstName: name.firstName,
          lastName: name.lastName,
        },
      ]);
      setname({firstName: "", lastName: ""})
    } else {
      updateData(name, edit.id);
    }
  };

  // useEffect(() => {
  //   if(edit){
  //     setname({firstName: edit.firstName, lastName: edit.lastName, id: edit.id})
  //   }else{
  //     setname("");
  //   }
  // },[setname,edit]);

  const handleDelete = (id) => {
    setData(data.filter((da) => da.id !== id));
  };

  const handleUpdate = (id) => {
    const newData = data.find((dat) => dat.id === id);
    setEdit(newData);
    setname({firstName: newData.firstName, lastName:newData.lastName});
    // console.log("update", newData)
  };

  return (
    <div className="App">
      <h2>Object useState</h2>
      <div>
        <label>FirstName</label>
        <input
        required
          type="text"
          value={name.firstName}
          onChange={(e) => setname({ ...name, firstName: e.target.value })}
        />
      </div>
      <div>
        <label>FirstName</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setname({ ...name, lastName: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleAdd}>{edit ? "Update" : "Add"}</button>
      </div>
      <div>
        {data.map((da) => (
          <div key={da.lastName}>
            <div>
              <div style={{ display: "inline-block", margin: "5px" }}>
                <label>FName</label>
                <span>{da.firstName}</span>
              </div>

              <div style={{ display: "inline-block", margin: "5px" }}>
                <label>LName</label>
                <span>{da.lastName}</span>
              </div>

              <div style={{ display: "inline-block", margin: "5px" }}>
                <button onClick={() => handleDelete(da.id)}>delete</button>
                <button onClick={() => handleUpdate(da.id)}>update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
