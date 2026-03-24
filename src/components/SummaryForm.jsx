import LabelTextarea from "./LabelTextarea";

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
        value={summary.summary}
        placeholder="A short overview of your experience, strengths, and career goals"
        onChange={handleChange}
      />
    </div>
  );
}
