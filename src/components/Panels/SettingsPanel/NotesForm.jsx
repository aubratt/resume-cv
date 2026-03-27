import LabelTextarea from "../../Form/LabelTextarea";

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
        placeholder="Application sent to CloudTech, ByteWorks, and Apex Systems for full-stack roles."
        onChange={handleChange}
      />
    </div>
  );
}
