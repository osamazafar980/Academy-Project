import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Course from "./Course"
import CourseContent from "./CourseContent"
import CourseLecture from "./CourseLecture";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/course/:name/:course" element={<Course />} />
          <Route exact path="/coursecontent/:name/:cname" element={<CourseContent />} />
          <Route exact path="/courselecture/:name/:lname" element={<CourseLecture />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;