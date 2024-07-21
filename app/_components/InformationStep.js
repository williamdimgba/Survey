import React, { useState } from 'react';
import Button from "@/app/_components/Button";
import TextSection from './TextSection';

export default function InformationStep({ texts, benefitsList, onNext }) {
  const [samplingCompleted, setSamplingCompleted] = useState(false);
  const [familiarDrinks, setFamiliarDrinks] = useState([]);
  const [otherDrink, setOtherDrink] = useState('');

  const handleCheckboxChange = (drink) => {
    setFamiliarDrinks((prev) => 
      prev.includes(drink) ? prev.filter(d => d !== drink) : [...prev, drink]
    );
  };

  const handleSubmit = () => {
    if (samplingCompleted) {
      onNext(); // Proceed to the next step
    }
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
                checked={familiarDrinks.includes(drink)}
                onChange={() => handleCheckboxChange(drink)}
                className="mr-2"
              />
              {drink}
            </label>
          ))}
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={familiarDrinks.includes("Other")}
              onChange={() => handleCheckboxChange("Other")}
              className="mr-2"
            />
            Other(s) – please, list:
            <input
              type="text"
              value={otherDrink}
              onChange={(e) => setOtherDrink(e.target.value)}
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
              checked={samplingCompleted}
              onChange={(e) => setSamplingCompleted(e.target.checked)}
              className="mr-2"
            />
          </div>
        <p className="font-bold mb-4">
          Please take this time to sample our drinks and continue with the survey. Once you are done with tasting 3-6 drinks and reading their labels, please check the box below and click Next.
        </p>
      </div>
      <div className="flex justify-end">
        <Button text="Next" disabled={!samplingCompleted} onClick={handleSubmit} />
      </div>
    </div>
  );
}