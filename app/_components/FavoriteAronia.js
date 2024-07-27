import React, { useState } from 'react';
import Button from "@/app/_components/Button";

export default function FavoriteAroniaGummyForm({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    favoriteGummy: '',
    overallTaste: '',
    sweetness: '',
    sourness: '',
    bitterness: '',
    aftertaste: '',
    texture: '',
    healthBenefitsImpact: '',
    consumptionFrequency: '',
    additionalComments: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.favoriteGummy) newErrors.favoriteGummy = "Favorite gummy selection is required.";
    if (!formData.overallTaste) newErrors.overallTaste = "Overall taste rating is required.";
    if (!formData.sweetness) newErrors.sweetness = "Sweetness rating is required.";
    if (!formData.sourness) newErrors.sourness = "Sourness rating is required.";
    if (!formData.bitterness) newErrors.bitterness = "Bitterness rating is required.";
    if (!formData.aftertaste) newErrors.aftertaste = "Aftertaste rating is required.";
    if (!formData.texture) newErrors.texture = "Texture rating is required.";
    if (!formData.healthBenefitsImpact) newErrors.healthBenefitsImpact = "Health benefits impact is required.";
    if (!formData.consumptionFrequency) newErrors.consumptionFrequency = "Consumption frequency is required.";
    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Favorite Aronia Gummy Form data:', formData);
      onNext(formData); // Call onNext to proceed to the next step
    }
  };

  const handlePrevious = () => {
    onPrevious(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Favorite Aronia Gummy Questions</h2>
      <form onSubmit={handleNext}>
        <div className="mb-6">
          <label className="block mb-2 font-bold">Which of the gummies did you like the most?</label>
          <select name="favoriteGummy" value={formData.favoriteGummy} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select your favorite gummy</option>
            <option value="Aronia-Raspberry">Aronia-Raspberry</option>
            <option value="Aronia-Fig">Aronia-Fig</option>
            <option value="Aronia-Strawberry">Aronia-Strawberry</option>
            <option value="Aronia-Mango">Aronia-Mango</option>
          </select>
          {errors.favoriteGummy && <p className="text-red-500">{errors.favoriteGummy}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the overall taste of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="overallTaste"
                  value={value}
                  checked={formData.overallTaste === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">5 – very tasty; 1 – not tasty at all</p>
          {errors.overallTaste && <p className="text-red-500">{errors.overallTaste}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the sweetness of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="sweetness"
                  value={value}
                  checked={formData.sweetness === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">1 (Not sweet enough) – 5 (Too sweet)</p>
          {errors.sweetness && <p className="text-red-500">{errors.sweetness}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the sourness of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="sourness"
                  value={value}
                  checked={formData.sourness === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">1 (Not sour) – 5 (Too sour)</p>
          {errors.sourness && <p className="text-red-500">{errors.sourness}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the bitterness of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="bitterness"
                  value={value}
                  checked={formData.bitterness === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">1 (Not bitter) – 5 (Too bitter)</p>
          {errors.bitterness && <p className="text-red-500">{errors.bitterness}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the aftertaste of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="aftertaste"
                  value={value}
                  checked={formData.aftertaste === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">1 (No after-taste) – 5 (Strong aftertaste)</p>
          {errors.aftertaste && <p className="text-red-500">{errors.aftertaste}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How would you rate the texture of your preferred gummy?</label>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="texture"
                  value={value}
                  checked={formData.texture === value.toString()}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">1 (too soft) – 5 (too rubbery)</p>
          {errors.texture && <p className="text-red-500">{errors.texture}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">Knowing the potential health benefits, would you be more or less likely to ingest it?</label>
          <select name="healthBenefitsImpact" value={formData.healthBenefitsImpact} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select your answer</option>
            <option value="More likely">More likely</option>
            <option value="Less likely">Less likely</option>
            <option value="Indifferent">Indifferent</option>
          </select>
          {errors.healthBenefitsImpact && <p className="text-red-500">{errors.healthBenefitsImpact}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How often do you think you would see yourself consuming this product?</label>
          <select name="consumptionFrequency" value={formData.consumptionFrequency} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select your answer</option>
            <option value="More than once a day">More than once a day</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Not at all">Not at all</option>
          </select>
          {errors.consumptionFrequency && <p className="text-red-500">{errors.consumptionFrequency}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">Is there anything else you would like to mention about your favorite aronia gummy or any of the others?</label>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        <div className="flex justify-between">
          <Button text="Previous" onClick={handlePrevious} />
          <Button text="Next" type="submit" />
        </div>
      </form>
    </div>
  );
}
