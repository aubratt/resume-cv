import useFormState from "./useFormState";
import LabelInput from "./LabelInput";
import FormFooter from "./FormFooter";
import LabelTextarea from "./LabelTextarea";

export default function CertificationsForm({
  initialData = null,
  mode = "add",
  onSubmit,
}) {
  const { formData, handleChange, handleSubmit } = useFormState(
    initialData,
    onSubmit,
    {
      certification: "",
      issuer: "",
      date: "",
      description: "",
    },
  );

  return (
    <form className="certifications-form" onSubmit={handleSubmit}>
      <LabelInput
        id="certification"
        name="certification"
        label="Certification"
        placeholder="Certification Name"
        value={formData.certification}
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
        placeholder="Describe the certification"
        value={formData.description}
        onChange={handleChange}
      />
      <div className="form__footer-wrapper">
        <FormFooter mode={mode} />
      </div>
    </form>
  );
}
