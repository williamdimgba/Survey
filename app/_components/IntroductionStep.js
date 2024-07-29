import React from 'react';
import Button from "@/app/_components/Button";
import TextSection from './TextSection';
import Image from 'next/image';
import Image1 from "@/app/_images/USDA logo.jpeg";
import Image2 from "@/app/_images/UMES logo.png";
import Image3 from "@/app/_images/jookender.png";
import Image4 from "@/app/_images/Ameg.png";

export default function IntroductionStep({ texts, agreementChecked, setAgreementChecked, onNext }) {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <div className="w-1/2 sm:w-1/4">
          <Image 
            src={Image1}
            alt="USDA LOGO"
            quality={80}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6">
          <Image 
            src={Image2}
            alt="UMES LOGO"
            quality={80}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6">
          <Image 
            src={Image3}
            alt="Jookender Logo"
            quality={80}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6">
          <Image 
            src={Image4}
            alt="Ameg LOGO"
            quality={80}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <p  className="mb-4 font-bold">Hello, and welcome!</p>
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
