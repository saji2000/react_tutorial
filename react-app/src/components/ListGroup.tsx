function ListGroup() {
  const items = ["New York", "Tehran", "Shiraz", "Toronto"];

  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
