import LabelTextarea from "../../Form/LabelTextarea";

export default function SummaryForm({ summary, setSummary }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSummary((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="summary-form">
      <LabelTextarea
        id="summary"
        name="summary"
        label="Summary"
        value={summary}
        placeholder="Innovative Software Developer with six years of experience designing and optimizing web applications. Skilled in JavaScript, Node.js, React, and Python."
        onChange={handleChange}
      />
    </div>
  );
}
