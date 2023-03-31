import React from "react";

export default function TodoSearch({ searchInput, setsearchInput, filter }) {
  return (
    <div class="card" style={{ marginRight: "0px" }}>
      <div class="card-body">
        <div className="d-flex">
          <input
            placeholder="Search Todo"
            style={{ width: "40%", weight: "40%" }}
            value={searchInput}
            onChange={(event) => setsearchInput(event.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            onClick={() => filter("search")}
            class="btn btn-primary mt-3 "
            style={{ color: "#fff", width: "44%" }}
          >
            search
          </button>
          <a
            href="add"
            class="btn btn-primary mt-3 d-flex justify-content-between align-items-center"
            style={{ color: "#fff", padding: "0 2rem" }}
          >
            Add new Task
          </a>
        </div>
      </div>
    </div>
  );
}
