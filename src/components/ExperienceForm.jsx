import { useEffect, useState } from "react";
import LabelInput from "./LabelInput";
import LabelTextarea from "./LabelTextarea";

export default function ExperienceForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      period: "",
      description: "",
    },
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="experience-form">
      <LabelInput
        id="company"
        name="company"
        label="Company"
        placeholder="Microsoft"
        value={formData.company}
        onChange={handleChange} />
      <LabelInput
        id="position"
        name="position"
        label="Position"
        placeholder="CEO"
        value={formData.position}
        onChange={handleChange} />
      <LabelInput
        id="location"
        name="location"
        label="Location"
        placeholder="Redmond, Washington"
        value={formData.location}
        onChange={handleChange} />
      <LabelInput
        id="period"
        name="period"
        label="Period"
        placeholder="Jan 2024--Present"
        value={formData.period}
        onChange={handleChange} />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        placeholder=""
        value={formData.description} 
        onChange={handleChange} />
      <div className="form__footer">
        <button type="submit" onClick={handleSubmit} className="form__submit">
          {mode === "add" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
