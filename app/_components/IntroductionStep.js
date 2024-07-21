import React from 'react';
import Button from "@/app/_components/Button";
import TextSection from './TextSection';

export default function IntroductionStep({ texts, agreementChecked, setAgreementChecked, onNext }) {
  return (
    <div>
      <TextSection texts={texts} />
      <div className="flex items-start mb-6">
        <input
          type="checkbox"
          checked={agreementChecked}
          onChange={(e) => setAgreementChecked(e.target.checked)}
          className="mt-1 mr-2"
        />
        <p className="font-bold">
          By clicking OK (or signing the paper form) below, you indicate that you have read and understand the previous information and consent to participate and have your data included in our research.
        </p>
      </div>
      <div className="flex justify-end">
        <Button text="Next" disabled={!agreementChecked} onClick={onNext} />
      </div>
    </div>
  );
}
