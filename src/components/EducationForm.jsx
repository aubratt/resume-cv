import useFormState from "./useFormState";
import LabelInput from "./LabelInput";
import FormFooter from "./FormFooter";

export default function EducationForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      school: "",
      degree: "",
      field: "",
      gpa: "",
      location: "",
      period: "",
    },
  );

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <LabelInput
        id="school"
        name="school"
        label="School"
        placeholder="Trinity University"
        value={formData.school}
        onChange={handleChange}
      />

      <LabelInput
        id="degree"
        name="degree"
        label="Degree"
        placeholder="Bachelor of Science"
        value={formData.degree}
        onChange={handleChange}
      />

      <LabelInput
        id="field"
        name="field"
        label="Field"
        placeholder="Marketing"
        value={formData.field}
        onChange={handleChange}
      />

      <LabelInput
        id="gpa"
        name="gpa"
        label="GPA"
        placeholder="3.0"
        value={formData.gpa}
        onChange={handleChange}
      />

      <LabelInput
        id="location"
        name="location"
        label="Location"
        placeholder="San Antonio, Texas"
        value={formData.location}
        onChange={handleChange}
      />

      <LabelInput
        id="period"
        name="period"
        label="Period"
        placeholder="2016-2020"
        value={formData.period}
        onChange={handleChange}
      />

      <FormFooter mode={mode} />
    </form>
  );
}
