import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import sary from "../assets/orientation.jpg";
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <div className="p-4 py-10 w-10/12">
        <div className="text-center">Welcome to our career assessment tool! Answer a set of questions and discover the field that best matches your skills and interests.</div>
      </div>
      <div className="w-10/12 flex ">
        <div className="h-64 border-2 shadow-xl border-sky-600 rounded-md flex justify-around p-8">
          <div className="flex flex-col w-8/12 justify-around">
            <div className="text-6xl text-sky-600 font-medium">Free orientation test</div>
            <div className="w-full flex justify-start">
              <Button variant="contained">
                <Link to="/orientation">Take a test</Link>
              </Button>
            </div>
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <img src={sary} className="w-1/2 h-auto" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
