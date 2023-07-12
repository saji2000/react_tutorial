import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>Wow</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisiblity(true)}>
        my button
      </Button>
    </div>
  );
}

export default App;
