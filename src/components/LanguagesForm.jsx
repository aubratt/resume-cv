import InputButton from "./InputButton";
import useFormState from "./useFormState";

export default function LanguagesForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      language: "",
    },
  );

  return (
    <form className="languages-form" onSubmit={handleSubmit}>
      <InputButton
        id="language"
        name="language"
        placeholder="Language"
        value={formData.language}
        onChange={handleChange}
        mode={mode}
      />
    </form>
  )
}
