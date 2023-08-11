/* eslint-disable no-unused-vars */
import "./App.css";
import Form from "./components/Form";
import OtherQuestions from "./components/OtherQuestions";
import Reducers from "./components/Reducers";

function App() {
  return (
    <div className="App">
      <Reducers />
      <OtherQuestions />
      <Form />
    </div>
  );
}

export default App;
