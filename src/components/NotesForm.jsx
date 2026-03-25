import LabelTextarea from "./LabelTextarea";

export default function NotesForm() {
  return (
    <div className="notes-form">
      <LabelTextarea
        id="notes"
        name="notes"
        label="Notes"
        value=""
        placeholder="Personal notes, i.e. which companies you sent this resume to"
      />
    </div>
  );
}
