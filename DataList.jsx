function DataList({ data, searchQuery }) {

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>

      {filteredData.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      {filteredData.length === 0 && <p>No users found!</p>}
    </div>
  );
}

export default DataList;