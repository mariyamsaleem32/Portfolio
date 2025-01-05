// import Count from './count';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Output from "./Output";
import Input from "./input";

const Dashboard = () => {
 
    return (
    <Router>
        <Routes>  {/* Use Routes for React Router v6 */}
        <Route path="/" element={<Input />} />
        <Route path="/output" element={<Output />} />
        </Routes>
    </Router>
    );
    }
    
export default Dashboard;