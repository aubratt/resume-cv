import { useEffect, useState } from "react";
import LabelInput from "./LabelInput";

export default function EducationForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      field: "",
      gpa: "",
      location: "",
      yearsAttended: "",
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
    <div className="education-form">
      <LabelInput
        id="school"
        name="school"
        label="School"
        placeholder="Trinity University"
        value={formData.school}
        onChange={handleChange}></LabelInput>
      <LabelInput
        id="degree"
        name="degree"
        label="Degree"
        placeholder="Bachelor of Science"
        value={formData.degree}
        onChange={handleChange}></LabelInput>
      <LabelInput
        id="field"
        name="field"
        label="Field"
        placeholder="Marketing"
        value={formData.field}
        onChange={handleChange}
      />
      <LabelInput
        id="GPA"
        name="gpa"
        label="GPA"
        placeholder="3.0"
        value={formData.gpa}
        onChange={handleChange}
      />
      <LabelInput
        id="Location"
        name="location"
        label="Location"
        placeholder="San Antonio, Texas"
        value={formData.location}
        onChange={handleChange}
      />
      <LabelInput
        id="years-attended"
        name="yearsAttended"
        label="Years Attended"
        placeholder="2016-2020"
        value={formData.yearsAttended}
        onChange={handleChange}
      />
      <div className="form__footer">
        <button type="submit" onClick={handleSubmit} className="form__submit">
          {mode === "add" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
