import AddEntryButton from "./AddEntryButton";
import LabelInput from "./LabelInput";
import LabelTextarea from "./LabelTextarea";

export default function GeneralForm({ general, setGeneral }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="general-form">
      <LabelInput
        id="name"
        name="name"
        label="Full Name"
        value={general.name}
        placeholder="Austin Bratton"
        onChange={handleChange}
      />
      <LabelInput
        id="headline"
        name="headline"
        label="Headline"
        value={general.headline}
        placeholder="Web Developer"
        onChange={handleChange}
      />
      <LabelInput
        id="email"
        name="email"
        label="Email"
        value={general.email}
        placeholder="ausbratton@gmail.com"
        onChange={handleChange}
      />
      <LabelInput
        id="phone"
        name="phone"
        label="Phone"
        value={general.phone}
        placeholder="555-555-5555"
        onChange={handleChange}
      />
      <LabelInput
        id="location"
        name="location"
        label="Location"
        value={general.location}
        placeholder="San Antonio, Texas"
        onChange={handleChange}
      />
    </div>
  );
}
