import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add({ setdata }) {
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  function AddTask() {
    const newdata = { id: Date.now(), task: input, complete: false };
    setdata((data) => [...data, newdata]);
    navigate("/");
  }
  return (
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">Todo Input</h1>
        <div className="card ">
          <div className="card-body">
            <div className="d-flex">
              <div
                className="p-1 bg-primary inline-block"
                style={{ width: "30px ", height: "30px" }}
              ></div>
              <input
                value={input}
                onChange={(event) => setinput(event.target.value)}
                placeholder="Input/Edit Todo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={AddTask}
                class="btn btn-primary mt-3 "
                style={{ color: "#fff", width: "50%" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
