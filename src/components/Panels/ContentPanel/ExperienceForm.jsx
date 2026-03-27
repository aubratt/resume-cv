import useFormState from "../../Form/useFormState";
import LabelInput from "../../Form/LabelInput";
import FormFooter from "./FormFooter";
import LabelTextarea from "../../Form/LabelTextarea";

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
        placeholder="Tech Solutions Inc."
        value={formData.company}
        onChange={handleChange}
      />
      <LabelInput
        id="position"
        name="position"
        label="Position"
        placeholder="Senior Full Stack Developer"
        value={formData.position}
        onChange={handleChange}
      />
      <LabelInput
        id="location"
        name="location"
        label="Location"
        placeholder="Los Angeles, California"
        value={formData.location}
        onChange={handleChange}
      />
      <LabelInput
        id="period"
        name="period"
        label="Period"
        placeholder="Jan 2024 - Present"
        value={formData.period}
        onChange={handleChange}
      />
      <LabelTextarea
        id="description"
        name="description"
        label="Description"
        placeholder="• Developed and optimized RESTful APIs, reducing response times by 40% 
        • Implemented an authentication system using OAuth2, enhancing security for over 500,000 users
        • Led a team of five developers to migrate a monolithic architecture to microservices, improving system scalability"
        value={formData.description}
        onChange={handleChange}
      />
      <FormFooter mode={mode} />
    </form>
  );
}
