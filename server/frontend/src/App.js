import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
<<<<<<< HEAD
import PostReview from "./components/Dealers/PostReview";
=======
>>>>>>> cd59725c55cb7fdd39135fd231953589c0006a93

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
<<<<<<< HEAD
      <Route path="/postreview/:id" element={<PostReview/>} />
=======
>>>>>>> cd59725c55cb7fdd39135fd231953589c0006a93
    </Routes>
  );
}
export default App;
