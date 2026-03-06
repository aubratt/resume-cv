import useFormState from "./useFormState";
import LabelInput from "./LabelInput";
import LabelTextarea from "./LabelTextarea";
import FormFooter from "./FormFooter";

export default function ExperienceForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      company: "",
      position: "",
      location: "",
      period: "",
      description: "",
    },
  );

  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      <LabelInput
        id="company"
        name="company"
        label="Company"
        placeholder="Microsoft"
        value={formData.company}
        onChange={handleChange}
      />
      <LabelInput
        id="position"
        name="position"
        label="Position"
        placeholder="CEO"
        value={formData.position}
        onChange={handleChange}
      />
      <LabelInput
        id="location"
        name="location"
        label="Location"
        placeholder="Redmond, Washington"
        value={formData.location}
        onChange={handleChange}
      />
      <LabelInput
        id="period"
        name="period"
        label="Period"
        placeholder="Jan 2024--Present"
        value={formData.period}
        onChange={handleChange}
      />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        placeholder=""
        value={formData.description}
        onChange={handleChange}
      />
      <FormFooter mode={mode} />
    </form>
  );
}
