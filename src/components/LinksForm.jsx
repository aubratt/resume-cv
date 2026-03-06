import useFormState from "./useFormState";
import LabelInput from "./LabelInput";
import FormFooter from "./FormFooter";

export default function LinksForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      label: "",
      url: "",
    },
  );

  return (
    <form className="links-form" onSubmit={handleSubmit}>
      <LabelInput
        id="label"
        name="label"
        label="Label"
        placeholder="Github"
        value={formData.label}
        onChange={handleChange}
      />
      <LabelInput
        id="url"
        name="url"
        label="URL"
        placeholder="https://github.com/aubratt"
        value={formData.url}
        onChange={handleChange}
      />
      <FormFooter mode={mode} />
    </form>
  );
}
