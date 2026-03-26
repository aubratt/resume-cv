import PreviewContact from "./PreviewContact";
import PreviewTitle from "./PreviewTitle";

export default function PreviewHeader({
  general,
  objectEmpty,
  inputEmpty,
  previewColor,
}) {
  return (
    <div className="preview__header">
      {!objectEmpty({ name: general.name, headline: general.headline }) && (
        <PreviewTitle
          name={general.name}
          headline={general.headline}
        />
      )}
      {!objectEmpty({
        email: general.email,
        phone: general.phone,
        location: general.location,
      }) && (
        <PreviewContact
          email={general.email}
          phone={general.phone}
          location={general.location}
          inputEmpty={inputEmpty}
          previewColor={previewColor}
        />
      )}
    </div>
  );
}
