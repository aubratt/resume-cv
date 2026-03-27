import useFormState from "../../Form/useFormState";
import LabelInput from "../../Form/LabelInput";
import FormFooter from "./FormFooter";
import LabelTextarea from "../../Form/LabelTextarea";

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
        placeholder="E-Commerce Dashboard"
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
        placeholder="https://github.com/username/e-commerce-dashboard"
        value={formData.website}
        onChange={handleChange}
      />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        placeholder="• Developed a full-stack analytics dashboard that allowed e-commerce businesses to track sales, user behavior, and conversion metrics in real time.
          • Built the front-end using React and Chart.js to create responsive data visualizations and interactive reports."
        value={formData.description}
        onChange={handleChange}
      />
      <FormFooter mode={mode} />
    </form>
  );
}
