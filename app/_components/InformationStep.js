import React, { useState } from 'react';
import Button from "@/app/_components/Button";
import TextSection from './TextSection';


export default function InformationStep({ texts, benefitsList, onNext, onPrevious }) {
  const [state, setState] = useState({
    samplingCompleted: false,
    familiarDrinks: [],
    otherDrink: '',
  });

  const handleCheckboxChange = (drink) => {
    setState(prevState => ({
      ...prevState,
      familiarDrinks: prevState.familiarDrinks.includes(drink)
        ? prevState.familiarDrinks.filter(d => d !== drink)
        : [...prevState.familiarDrinks, drink]
    }));
  };

  const handleOtherDrinkChange = (e) => {
    setState(prevState => ({
      ...prevState,
      otherDrink: e.target.value
    }));
  };

  const handleSamplingCompletedChange = (e) => {
    setState(prevState => ({
      ...prevState,
      samplingCompleted: e.target.checked
    }));
  };

  const handleNext = async () => {
    if (state.samplingCompleted) {
      // Save state to local storage
      localStorage.setItem('informationStepData', JSON.stringify(state));
      
      console.log('Final state before submission:', state);
      onNext(state); // Pass the state to the next step
    }
  };

  const handlePrevious = () => {
    onPrevious(state); // Pass the state to the previous step
  };

  return (
    <div>
      <p className="text-center mb-4">
        Thank you in advance for your participation in this study and for supporting science at UMES.
      </p>
      <h2 className="text-center font-bold mb-4">
        I. Drink Information and Background
      </h2>
      <p className="mb-4">Are you familiar with any of the following health drinks? – please, check all that apply:</p>
      <div className="mb-6">
        <div>
          {[
            "Kombucha",
            "Matcha Tea",
            "Herbal Tea",
            "L-Citrulline",
            "Orange Juice",
            "Coconut Water/Milk",
            "Tomato Juice",
            "None",
          ].map((drink) => (
            <label key={drink} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={state.familiarDrinks.includes(drink)}
                onChange={() => handleCheckboxChange(drink)}
                className="mr-2"
              />
              {drink}
            </label>
          ))}
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={state.familiarDrinks.includes("Other")}
              onChange={() => handleCheckboxChange("Other")}
              className="mr-2"
            />
            Other(s) – please, list:
            <input
              type="text"
              value={state.otherDrink}
              onChange={handleOtherDrinkChange}
              placeholder="Please specify"
              className="ml-2 p-1 border rounded"
            />
          </label>
        </div>
      </div>
      <ul className="list-disc list-inside mb-6">
        <TextSection texts={texts} />
      </ul>
      <ul className="list-disc list-inside mb-6">
        {benefitsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mb-6 flex items-start">
        <div>
            <input
              type="checkbox"
              checked={state.samplingCompleted}
              onChange={handleSamplingCompletedChange}
              className="mr-2"
            />
          </div>
        <p className="font-bold mb-4">
          Please take this time to sample our drinks and continue with the survey. Once you are done with tasting 3-6 drinks and reading their labels, please check the box below and click Next.
        </p>
      </div>
      <div className="flex justify-between">
        <Button text="Previous" onClick={handlePrevious} />
        <Button text="Next" disabled={!state.samplingCompleted} onClick={handleNext} />
      </div>
    </div>
  );
}
