import { 
  BrowserRouter, 
  Navigate,
  Routes, 
  Route 
} from "react-router-dom";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Notes from "./pages/Notes";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:id" element={<View />} />
      <Route path="/notes/edit/:id" element={<Edit />} />
      <Route path="/" element={<Navigate to="/notes" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
