import React, { useState } from 'react';
import Button from "@/app/_components/Button";

export default function DemographicForm({ onNext }) {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    ethnicity: '',
    otherEthnicity: '',
    education: '',
    fieldOfStudy: '',
    otherFieldOfStudy: '',
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
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required.";
    if (!formData.education) newErrors.education = "Education is required.";
    if (!formData.fieldOfStudy) newErrors.fieldOfStudy = "Field of study is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Demographic Form data:', formData);
      
      // Save the form data to localStorage
      localStorage.setItem('demographicFormData', JSON.stringify(formData));
      
      onNext(formData); // Proceed to the next step
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">II. Demographic Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_answer">Prefer not to answer</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="age">Age</label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value="">Select age range</option>
            <option value="12-17">12 - 17</option>
            <option value="18-24">18 - 24</option>
            <option value="25-34">25 - 34</option>
            <option value="35-44">35 - 44</option>
            <option value="45-54">45 - 54</option>
            <option value="55-65">55 - 65</option>
            <option value="65+">65+</option>
          </select>
          {errors.age && <p className="text-red-500">{errors.age}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="ethnicity">Ethnicity</label>
          <select
            id="ethnicity"
            name="ethnicity"
            value={formData.ethnicity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value="">Select ethnicity</option>
            <option value="caucasian">Caucasian</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="black">Black or African American</option>
            <option value="native">Native American or American Indian</option>
            <option value="asian">Asian / Pacific Islander</option>
            <option value="other">Other</option>
          </select>
          {errors.ethnicity && <p className="text-red-500">{errors.ethnicity}</p>}
          {formData.ethnicity === 'other' && (
            <input
              type="text"
              name="otherEthnicity"
              value={formData.otherEthnicity}
              onChange={handleInputChange}
              placeholder="Please specify"
              className="mt-2 w-full p-2 border rounded"
            />
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="education">Education</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value="">Select education level</option>
            <option value="no_schooling">No schooling completed</option>
            <option value="nursery_to_8">Nursery school to 8th grade</option>
            <option value="some_high_school">Some high school, no diploma</option>
            <option value="high_school">High school graduate, diploma or the equivalent (for example: GED)</option>
            <option value="some_college">Some college credit, no degree</option>
            <option value="trade_school">Trade/technical/vocational training</option>
            <option value="associate">Associate degree</option>
            <option value="bachelor">Bachelor&apos;s degree</option>
            <option value="master">Master&apos;s degree</option>
            <option value="professional">Professional degree</option>
            <option value="doctorate">Doctorate degree</option>
          </select>
          {errors.education && <p className="text-red-500">{errors.education}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="fieldOfStudy">Field of Study/Work</label>
          <select
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value="">Select field</option>
            <option value="agriculture">Agriculture/farming</option>
            <option value="science">Science</option>
            <option value="law">Law</option>
            <option value="medicine">Medicine</option>
            <option value="engineering">Engineering</option>
            <option value="other">Other</option>
          </select>
          {errors.fieldOfStudy && <p className="text-red-500">{errors.fieldOfStudy}</p>}
          {formData.fieldOfStudy === 'other' && (
            <input
              type="text"
              name="otherFieldOfStudy"
              value={formData.otherFieldOfStudy}
              onChange={handleInputChange}
              placeholder="Please specify"
              className="mt-2 w-full p-2 border rounded"
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button text="Previous" />
          <Button text="Next" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
