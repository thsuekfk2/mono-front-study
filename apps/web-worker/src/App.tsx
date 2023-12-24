import { NonWorker } from "./component/NonWorker";
import { WebWorker } from "./component/WebWorker";

function App() {
  return (
    <div>
      <span className="text-title">NoneWorker</span>
      <NonWorker />
      <hr />
      <span className="text-title">WebWorker</span>
      <WebWorker />
    </div>
  );
}

export default App;
