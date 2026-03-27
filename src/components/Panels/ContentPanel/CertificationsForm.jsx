import useFormState from "../../Form/useFormState";
import LabelInput from "../../Form/LabelInput";
import FormFooter from "./FormFooter";
import LabelTextarea from "../../Form/LabelTextarea";

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
        placeholder="AWS Certified Developer Associate"
        value={formData.certification}
        onChange={handleChange}
      />
      <LabelInput
        id="issuer"
        name="issuer"
        label="Issuer"
        placeholder="Amazon Web Services"
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
        placeholder="Certification demonstrating proficiency in developing, deploying, and maintaining scalable applications on AWS, including experience with cloud services, deployment automation, and application security."
        value={formData.description}
        onChange={handleChange}
      />
      <div className="form__footer-wrapper">
        <FormFooter mode={mode} />
      </div>
    </form>
  );
}
