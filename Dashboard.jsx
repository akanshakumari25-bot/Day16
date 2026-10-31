import { useState } from "react";
import SearchBar from "./SearchBar";
import DataList from "./DataList";

function Dashboard() {

  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    { id: 1, name: "Akansha" },
    { id: 2, name: "Rani" },
    { id: 3, name: "Priya" },
    { id: 4, name: "Rahul" },
    { id: 5, name: "Aman" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <DataList
        data={data}
        searchQuery={searchQuery}
      />

    </div>
  );
}

export default Dashboard;