import useFormState from "./useFormState";
import LabelInput from "./LabelInput";
import LabelTextarea from "./LabelTextarea";
import FormFooter from "./FormFooter";

export default function ProjectsForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      name: "",
      period: "",
      website: "",
      description: "",
    },
  );

  return (
    <form className="projects-form" onSubmit={handleSubmit}>
      <LabelInput
        id="name"
        name="name"
        label="Name"
        placeholder="Resume Builder"
        value={formData.name}
        onChange={handleChange}
      />
      <LabelInput
        id="period"
        name="period"
        label="Period"
        placeholder="Mar 2026"
        value={formData.period}
        onChange={handleChange}
      />
      <LabelInput
        id="website"
        name="website"
        label="Website"
        placeholder="https://aubratt.github.io/resume-cv/"
        value={formData.website}
        onChange={handleChange}
      />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        placeholder="Describe the project, including its purpose, your role,
        key results, etc."
        value={formData.description}
        onChange={handleChange}
      />
      <FormFooter mode={mode} />
    </form>
  );
}
