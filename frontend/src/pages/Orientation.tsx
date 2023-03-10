import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import Question from "../sections/orientation/Question";
import BasicModal from "../components/BasicModal";
import { Link } from "react-router-dom";

type Props = {};

const Orientation = (props: Props) => {
  const [fields, setFields] = useState(["Informatic", "Biotechnology", "Tertiaire", "Engineer", "Tourism"]);
  const [questions, setQuestions] = useState<Array<string>>([
    "How much do you enjoy problem-solving and logical thinking?",
    "How important is it to you to work in a field that makes a positive impact on society?",
    "How comfortable are you working with numbers and data?",
    "How important is creativity and innovation in your ideal career?",
    "How interested are you in biology and life sciences?",
    "How important is it to have a stable and reliable job?",
    "How interested are you in learning about different cultures and languages?",
    "How comfortable are you working with machines and technology?",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const [done, setDone] = useState(false);

  const [selectedValues, setSelectedValues] = useState<Array<number>>(new Array(questions.length));

  const [bestField, setBestField] = useState("");

  const matrix = [
    [5, 3, 5, 4, 1, 4, 1, 5], // Informatic
    [4, 3, 4, 2, 5, 4, 1, 3], // Biotech
    [3, 4, 4, 3, 1, 4, 3, 3], // Tertiaire
    [4, 4, 4, 5, 1, 5, 2, 3], // GIC
    [2, 5, 3, 3, 2, 3, 5, 2], // Tourism
  ];

  function setSVs(v: number, i: number) {
    const res = selectedValues;
    res[i] = v;
    setSelectedValues(res);
    console.log(res);
  }

  function euclideanDistance(a: Array<number>, b: Array<number>) {
    if (a.length !== b.length) {
      throw new Error("Vectors must have the same length");
    }
    let sumOfSquares = 0;
    for (let i = 0; i < a.length; i++) {
      sumOfSquares += (a[i] - b[i]) ** 2;
    }
    return Math.sqrt(sumOfSquares);
  }

  function doIt() {
    const distances = matrix.map((field) => euclideanDistance(selectedValues, field));

    // Find the index of the field with the smallest distance
    const bestFieldIndex = distances.indexOf(Math.min(...distances));

    // Get the name of the best field
    const bestField: string = fields[bestFieldIndex];
    console.log(bestField);
    setBestField(bestField);
    setDone(true);
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-full md:w-2/3">
      {!done ? (
        <div className="">
      <div className="w-full text-center mt-8 text-neutral-500 border-b pb-5 mb-5">Please rate the following statements on a scale of 1 to 5 to indicate the extent to which you feel they apply to you, with 1 being not at all and 5 being very much. </div>

          <div className="">
            {questions.map((question, index) => {
              return <Question question={question} key={index} onCb={(v) => setSVs(v, index)} />;
            })}
          </div>
            <div className="flex items-center justify-end p-2">
          <Button variant="outlined" onClick={doIt}>Evaluate Me</Button>

            </div>
        </div>
      ) : (
        <div className="">
          {isLoading ? (
            <div className="loading w-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10 p-2 flex items-center justify-center">
              <div className="card p-32 border rounded-lg text-center shadow-lg">
                <div className="">
                Based on your responses to our questions, we suggest that the field of <span className="text-blue-600">{bestField}</span> may be a good fit for your skills and interests.

                </div>
              <p className="p-3">Go back <Link className='text-blue-600' to='/register'>Home</Link> </p>
                <Link className='text-blue-600' to='/register'>Register</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Orientation;
