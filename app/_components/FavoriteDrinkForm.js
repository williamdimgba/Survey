import React, { useState } from 'react';
import Button from "@/app/_components/Button";

export default function FavoriteDrinkForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    favoriteDrink: '',
    overallTaste: '',
    sweetness: '',
    sourness: '',
    bitterness: '',
    afterTaste: '',
    healthBenefitsImpact: '',
    preferredAdditive: '',
    otherAdditive: '',
    consumptionFrequency: '',
    priceWillingness: '',
    additionalComments: ''
  });

  const [errors, setErrors] = useState({}); // State to hold error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.favoriteDrink) newErrors.favoriteDrink = "Favorite drink is required.";
    if (!formData.overallTaste) newErrors.overallTaste = "Overall taste rating is required.";
    if (!formData.sweetness) newErrors.sweetness = "Sweetness rating is required.";
    if (!formData.sourness) newErrors.sourness = "Sourness rating is required.";
    if (!formData.bitterness) newErrors.bitterness = "Bitterness rating is required.";
    if (!formData.afterTaste) newErrors.afterTaste = "After-taste rating is required.";
    if (!formData.healthBenefitsImpact) newErrors.healthBenefitsImpact = "Health benefits impact is required.";
    if (!formData.preferredAdditive) newErrors.preferredAdditive = "Preferred additive is required.";
    if (!formData.consumptionFrequency) newErrors.consumptionFrequency = "Consumption frequency is required.";
    if (!formData.priceWillingness) newErrors.priceWillingness = "Price willingness rating is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Favorite Drink Form data:', formData);
      onSubmit(formData); // Proceed to submit the data
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">II. Favorite Drink Questions</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-bold">Which of the drinks did you like the most?</label>
          <select name="favoriteDrink" value={formData.favoriteDrink} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select a drink</option>
            <option value="Raspberry">Raspberry</option>
            <option value="Chamomile">Chamomile</option>
            <option value="Earl Grey">Earl Grey</option>
            <option value="Holy Basil and Fig">Holy Basil and Fig</option>
            <option value="Original Aronia Drink">Original Aronia Drink</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Pomegranate">Pomegranate</option>
            <option value="Peppermint">Peppermint</option>
          </select>
          {errors.favoriteDrink && <p className="text-red-500">{errors.favoriteDrink}</p>}
        </div>
        /**
         */
        <RatingQuestion
          label="How would you rate the overall taste of your preferred drink?"
          name="overallTaste"
          value={formData.overallTaste}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - Not tasty at all' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Very tasty' },
          ]}
        />
        {errors.overallTaste && <p className="text-red-500">{errors.overallTaste}</p>}

        <RatingQuestion
          label="How would you rate the sweetness of your preferred drink?"
          name="sweetness"
          value={formData.sweetness}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - Not sweet enough' },
            { value: '2', label: '2' },
            { value: '3', label: '3 - Just right' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Too sweet' },
          ]}
        />
        {errors.sweetness && <p className="text-red-500">{errors.sweetness}</p>}

        <RatingQuestion
          label="How would you rate the sourness of your preferred drink?"
          name="sourness"
          value={formData.sourness}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - Not sour' },
            { value: '2', label: '2' },
            { value: '3', label: '3 - Just right' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Too sour' },
          ]}
        />
        {errors.sourness && <p className="text-red-500">{errors.sourness}</p>}

        <RatingQuestion
          label="How would you rate the bitterness of your preferred drink?"
          name="bitterness"
          value={formData.bitterness}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - Not bitter' },
            { value: '2', label: '2' },
            { value: '3', label: '3 - Just right' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Too bitter' },
          ]}
        />
        {errors.bitterness && <p className="text-red-500">{errors.bitterness}</p>}

        <RatingQuestion
          label="How would you rate the after-taste of your preferred drink?"
          name="afterTaste"
          value={formData.afterTaste}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - No after-taste' },
            { value: '2', label: '2' },
            { value: '3', label: '3 - Just right' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Strong after-taste' },
          ]}
        />
        {errors.afterTaste && <p className="text-red-500">{errors.afterTaste}</p>}

        <div className="mb-6">
          <label className="block mb-2 font-bold">Knowing the potential health benefits, would you be more or less likely to drink it?</label>
          <select name="healthBenefitsImpact" value={formData.healthBenefitsImpact} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select an option</option>
            <option value="More likely">More likely</option>
            <option value="Less likely">Less likely</option>
            <option value="Indifferent">Indifferent</option>
          </select>
          {errors.healthBenefitsImpact && <p className="text-red-500">{errors.healthBenefitsImpact}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">Which proposed additive would you be most interested in?</label>
          <select name="preferredAdditive" value={formData.preferredAdditive} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select an additive</option>
            <option value="Caffeine">Caffeine</option>
            <option value="Melatonin">Melatonin</option>
            <option value="Herbal Teas">Herbal Teas</option>
            <option value="Various organic extracts">Various organic extracts (Pomegranate, fig, raspberries, etc.)</option>
            <option value="Turmeric">Turmeric</option>
            <option value="Ginger">Ginger</option>
            <option value="Celery Juice">Celery Juice</option>
            <option value="None">None</option>
            <option value="Other">Other</option>
          </select>
          {errors.preferredAdditive && <p className="text-red-500">{errors.preferredAdditive}</p>}
          {formData.preferredAdditive === 'Other' && (
            <input
              type="text"
              name="otherAdditive"
              value={formData.otherAdditive}
              onChange={handleInputChange}
              placeholder="Please specify"
              className="mt-2 w-full p-2 border rounded"
            />
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold">How often do you think you would see yourself consuming this product?</label>
          <select name="consumptionFrequency" value={formData.consumptionFrequency} onChange={handleInputChange} className="w-full p-2 border rounded">
            <option value="">Select frequency</option>
            <option value="More than once a day">More than once a day</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Not at all">Not at all</option>
          </select>
          {errors.consumptionFrequency && <p className="text-red-500">{errors.consumptionFrequency}</p>}
        </div>

        <RatingQuestion
          label="On a scale of 1 - 5, how much would you be willing to pay a premium ranging from $2-3 for this drink per 12 oz bottle?"
          name="priceWillingness"
          value={formData.priceWillingness}
          onChange={handleInputChange}
          options={[
            { value: '1', label: '1 - Unwilling' },
            { value: '2', label: '2' },
            { value: '3', label: '3 - Indifferent' },
            { value: '4', label: '4' },
            { value: '5', label: '5 - Very willing' },
          ]}
        />
        {errors.priceWillingness && <p className="text-red-500">{errors.priceWillingness}</p>}

        <div className="mb-6">
          <label className="block mb-2 font-bold">Is there anything else you would like to mention about your favorite drink or any of the others?</label>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button text="Submit Survey" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

function RatingQuestion({ label, name, value, onChange, options }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-bold">{label}</label>
      <div className="flex justify-between">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}