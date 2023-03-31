import React, { useEffect, useState } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";

export default function Home({ data, setdata }) {
  const [filterData, setfilterData] = useState(data);
  const [searchInput, setsearchInput] = useState("");
  function filter(type) {
    if (type === "done") {
      const filtered = data.filter((object) => object.complete);
      setfilterData(filtered);
    }
    if (type === "todo") {
      const filtered = data.filter((object) => !object.complete);
      setfilterData(filtered);
    }
    if (type === "all") {
      setfilterData(data);
    }
    if (type === "search") {
      const filtered = data.filter((object) =>
        object.task.toLowerCase().includes(searchInput.toLocaleLowerCase())
      );
      setfilterData(filtered);
    }
  }
  useEffect(() => {
    setfilterData(data);
  }, [data]);
  return (
    <div className="row" style={{ marginBottom: "100px" }}>
      <div className="col-10 mx-auto col-md-7 mt-1">
        <h1 className="text-capitalize text-center">
          TODO LIST
          <br />
          <br />
          <h2>~RIKI EGA PRAMANA~</h2>
        </h1>

        {/* Mencari Data Todo List di File Json */}
        <TodoSearch
          searchInput={searchInput}
          setsearchInput={setsearchInput}
          filter={filter}
        />
      </div>

      {/* Halaman Awal/Home */}
      <div className="center">
        <div className="col-5 mx-auto col-md-7 mt-1">
          <h2 className="text-capitalize text-center">TodoList</h2>
          <TodoList
            Data={filterData}
            setdata={setdata}
            filter={filter}
            setfilterData={setfilterData}
          />
        </div>
      </div>
    </div>
  );
}
