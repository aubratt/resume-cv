import useFormState from "../../Form/useFormState";
import LabelInput from "../../Form/LabelInput";
import FormFooter from "./FormFooter";
import LabelTextarea from "../../Form/LabelTextarea";

export default function AwardsForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      award: "",
      issuer: "",
      date: "",
      description: "",
    },
  );

  return (
    <form className="awards-form" onSubmit={handleSubmit}>
      <LabelInput
        id="award"
        name="award"
        label="Award"
        placeholder="Award Name"
        value={formData.award}
        onChange={handleChange}
      />
      <LabelInput
        id="issuer"
        name="issuer"
        label="Issuer"
        placeholder="Issuer Name"
        value={formData.issuer}
        onChange={handleChange}
      />
      <LabelInput
        id="date"
        name="date"
        label="Date"
        placeholder="Mar 2026"
        value={formData.date}
        onChange={handleChange}
      />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        value={formData.description}
        placeholder="Info about the award"
        onChange={handleChange}
      />
      <div className="form__footer-wrapper">
        <FormFooter mode={mode} />
      </div>
    </form>
  );
}
