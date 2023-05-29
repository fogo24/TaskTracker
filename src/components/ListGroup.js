function ListGroup() {
  let items = ["Fogo", "Numi", "Aanu", "Joke", "Jemine"];

  // items = [];
  const message = items.length === 0 ? "Items not found" : null;

  return (
    <>
      <h1>ListGroup</h1>
      {message}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
