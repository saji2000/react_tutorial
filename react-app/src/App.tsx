import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("Button")}>
        my button
      </Button>
    </div>
  );
}

export default App;
