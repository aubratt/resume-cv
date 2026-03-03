import LabelInput from "./LabelInput";

export default function GeneralForm() {
  return (
    <div className="general-form">
      <LabelInput
        id="full-name"
        name="full-name"
        label="Full Name"
        placeholder="Austin Bratton"
      />
      <LabelInput
        id="phone"
        name="phone"
        label="Phone"
        placeholder="555-555-5555"
      />
      <LabelInput
        id="email"
        name="email"
        label="Email"
        placeholder="ausbratton@gmail.com"
      />
      <LabelInput
        id="location"
        name="location"
        label="Location"
        placeholder="San Antonio, Texas"
      />
    </div>
  );
}
