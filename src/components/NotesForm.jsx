import LabelTextarea from "./LabelTextarea";

export default function NotesForm({ notes, setNotes }) {
  const handleChange = (e) => {
    setNotes(e.target.value);
  }

  return (
    <div className="notes-form">
      <LabelTextarea
        id="notes"
        name="notes"
        label="Notes"
        value={notes}
        placeholder="Personal notes, i.e. which companies you sent this resume to"
        onChange={handleChange}
      />
    </div>
  );
}
