"use client";

import { useState } from "react";
import Button from "@/app/_components/Button";

export default function Home() {
  const [click, setClick] = useState(false);

  const texts = [
    `Hello, and welcome! You are invited to participate in this focus group/survey of an Aronia berry-based drink. We are interested in finding out your points of view on the taste and quality of our drink. Additionally, we want to show you the difference between other power drinks on the market and our line of products, and educate you about the potential benefits of using our new drinks.`,
  
    `Your participation in this study is completely voluntary. You can stop your survey and tasting at any time without specifying a reason. All drink samples are safe to drink and have a printed label with nutrition information and ingredients. On the next page, you will find some information about the berries used in the drink and their advantages over other drinks on the market. Then, you will be given 6 samples of different drink flavors to try, and finally, you will be asked to answer some questions anonymously using either a paper form or a computerized form. This should take approximately 10 minutes of your time. You will not be contacted again in the future, and you will not be paid for participating in this study. This focus group/survey does not involve any foreseeable risk to you, and there are no direct benefits aside from education regarding new products. However, the benefits of your participation in our research include helping to create a better formulation for the future marketing of the Aronia berry.`,
  
    `We will be happy to answer any questions you have about this study. If you have further questions about this project or if you have a research-related problem, you may contact our program director, Dr. Victoria Volkis, at (410) 651-6030.`
  ];

  return (
    <div className="text-center">
      <Agreement texts={texts} />
      <input 
        type="checkbox" 
        onChange={(e) => setClick(e.target.checked)}
      />
      <Button text="Next" disabled={!click} />
    </div>
  );
}
 
function Agreement({ texts }) {
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index}>
          {text}
        </p>
      ))}
    </div>
  );
}
