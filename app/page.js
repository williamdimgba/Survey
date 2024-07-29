"use client";

import { useState } from "react";
import DemographicForm from "@/app/_components/DemographicForm";
import FavoriteDrinkForm from "@/app/_components/FavoriteDrinkForm";
import IntroductionStep from "@/app/_components/IntroductionStep";
import InformationStep from "@/app/_components/InformationStep";
import FavoriteHolyBasilGummyForm from "./_components/FavoriteHolyBasil";
import FavoriteAroniaForm from "./_components/FavoriteAronia";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [surveyData, setSurveyData] = useState({});

  const introTexts = [
    `You are invited to participate in this focus group/survey of an Aronia berry-and Holy Basil-based power aid drinks and vitamin gummies. These products are all-organic, natural, preservantes- and colorants-free, with no sugar added, and real plants/fruits inside. They were created, analyzed and branded by students from the UMES summer AFRI-EWD-REEU, AFRI-EWD-FANE ASTENA programs funded by USDA, and ACS Project SEED Program funded by the ACS.`,
    `We are interested in finding out your opinion on the taste and quality of our drink and gummies. Also, we want to show you the difference between other new products and other products on the market and educate you about the potential benefits of using new drinks and gummies.`,
    `Your participation in this study is completely voluntary. You can stop your survey and tasting at any time without specifying the reason. All drink samples are safe to drink and have a printed label with nutrition information and ingredients as well as the gummy samples.`,
    `On the next page you will find some information about berries and herbs used in our products. Then you will be given 4 samples of different drink and three samples of different gummy flavors to try, and finally, you will be asked to answer anonymously some questions using either a paper form or computerized form. This should take approximately 10 minutes of your time. You will not be contacted again in the future. You will not be paid for being in this study. This focus group/survey does not involve any foreseeable risk to you and there are no direct benefits aside from education regarding new products. However, the benefits of your participation in our research includes helping to create a better formulation for the future marketing of the Aronia berry and Holy basil.`,
    `Note that all products were created in the test kitchen and were properly pasteurized and stored.`,
    `We will be happy to answer any questions you have about this study. If you have further questions about this project or if you have a research-related problem, you may contact our program director, Dr. Victoria Volkis at (410) 651-6030.
By clicking OK (or signing the paper form) below, you indicate that you have read and understand the previous information and consent to participate and have your data included in our research.`,
    `Thank you in advance for your participation in this study and for supporting science at UMES.`
  ];

  const infoTexts = [
    `Power drinks, often paralleled with energy drinks or sports drinks, are drinks that may provide benefits towards health and wellness in the human body. They are categorized into three major groups: isotonic; containing an equal level of sodium and sugar as in the human body, hypertonic; containing a higher level of sodium and sugar, and hypotonic; containing a lower level of sodium and sugar. Gatorade, for example, is an isotonic power drink that was designed to replenish lost water and electrolytes in the human body due to sweat, or other causes, especially on peaks of physical activity.`,
    `Power Drinks, however, all have a major caveat in that they are not as healthy for you as they claim to be. Taking a closer look at nutrition labels reveals that despite being isotonic, these drinks are oversaturated with sodium and over-sweetened with sugar, which becomes a problem when trying to market their product to those with hypertension or diabetes. In addition to this, power drinks contain a significant number of inorganic additives, preservatives, and synthetic dyes. Finally, some drinks do not claim to have any health benefits on their label and do not contain fruits.`,
    `What makes the Aronia berry special is its incredibly high antioxidant content, which can be harnessed in the form of a power drink. For context, Aronia contains around 10 times the concentration of various antioxidants compared to blueberries. In addition to this, Aronia contains vital minerals and microelements, making it an excellent drink in the market promoting a healthy lifestyle. Our Aronia power drinks aim to work around existing drawbacks of traditional power drinks by:`
  ];

  const benefitsList = [
    "Being all natural",
    "Being completely organic",
    "Using no artificial colorings or flavorings",
    "Being sugar free",
    "Containing a wide range of antioxidants, terpenes, essential oils, minerals, and microelements",
    "Using organic additives like herbal teas or similar berries for essential oils, we create different blends of our drink.",
    "And finally, putting the health benefits front and center for our label"
  ];

  const handleNext = (data) => {
    setCurrentStep(prevStep => prevStep + 1);
    if (data) {
      setSurveyData(prevData => ({ ...prevData, ...data }));
    }
    window.scrollTo(0, 0);
  };

  const handlePrev = (data) => {
    setCurrentStep(prevStep => prevStep - 1);
    if (data) {
      setSurveyData(prevData => ({ ...prevData, ...data }));
    }
    window.scrollTo(0, 0);
  };

  const handleSubmit = (data) => {
    const finalData = { ...surveyData, ...data };
    console.log('Final survey data:', finalData);
    // Here you would typically send all the collected data to your backend or Supabase
    alert('Survey submitted successfully!');
    // Reset the form
    setCurrentStep(1);
    setSurveyData({});
    setAgreementChecked(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {currentStep === 1 && (
        <IntroductionStep 
          texts={introTexts} 
          agreementChecked={agreementChecked} 
          setAgreementChecked={setAgreementChecked}
          onNext={() => handleNext()}
        />
      )}
      {currentStep === 2 && (
        <InformationStep 
          texts={infoTexts} 
          benefitsList={benefitsList}
          onNext={handleNext}
          onPrevious={handlePrev}
        />
      )}
      {currentStep === 3 && (
        <DemographicForm onNext={handleNext} onPrevious={handlePrev} />
      )}
      {currentStep === 4 && (
        <FavoriteDrinkForm onNext={handleNext} onPrevious={handlePrev} />
      )}
      {currentStep === 5 && (
        <FavoriteAroniaForm onNext={handleNext} onPrevious={handlePrev} />
      )}
      {currentStep === 6 && (
        <FavoriteHolyBasilGummyForm onSubmit={handleSubmit} onPrevious={handlePrev} />
      )}
    </div>
    
  );
}
