import useFormState from "./useFormState";
import InputButton from "./InputButton";

export default function SkillsForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      skill: "",
    },
  );

  return (
    <form className="skills-form" onSubmit={handleSubmit}>
      <InputButton
        id="skill"
        name="skill"
        placeholder="Communication"
        value={formData.skill}
        onChange={handleChange}
        mode={mode}
      />
    </form>
  );
}
