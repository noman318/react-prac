/* eslint-disable no-unused-vars */
import "./App.css";
import Form from "./components/Form";
import OtherQuestions from "./components/OtherQuestions";
import Reducers from "./components/Reducers";
import JsPrac from "./components/JsPrac";
import Table from "./components/Table";
import ModalIssue from "./components/ModalIssue";
import PerformanceLog from "./components/test/test";

function App() {
  return (
    <div className="App">
      {/* <Reducers />
      <OtherQuestions />
      <Form /> */}
      {/* <JsPrac /> */}
      <Table />
      <ModalIssue />
      {/* <PerformanceLog /> */}
    </div>
  );
}

export default App;
