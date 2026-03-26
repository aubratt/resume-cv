import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import PreviewContactEntry from "./PreviewContactEntry";

export default function PreviewContact({
  email,
  phone,
  location,
  inputEmpty,
  previewColor,
}) {
  return (
    <div className="preview__contact">
      {!inputEmpty(email) && (
        <PreviewContactEntry
          icon={<EnvelopeIcon stroke={previewColor} className="preview__icon" />}
          text={email}
        />
      )}
      {!inputEmpty(phone) && (
        <PreviewContactEntry
          icon={<PhoneIcon stroke={previewColor} className="preview__icon" />}
          text={phone}
        />
      )}
      {!inputEmpty(location) && (
        <PreviewContactEntry
          icon={<MapPinIcon stroke={previewColor} className="preview__icon" />}
          text={location}
        />
      )}
    </div>
  );
}
