import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import PreviewContactEntry from "./PreviewContactEntry";

export default function PreviewContact({ email, phone, location, inputEmpty }) {
  return (
    <div className="preview__contact">
      {!inputEmpty(email) && (
        <PreviewContactEntry
          icon={<EnvelopeIcon stroke="black" className="preview__icon" />}
          text={email}
        />
      )}
      {!inputEmpty(phone) && (
        <PreviewContactEntry
          icon={<PhoneIcon stroke="black" className="preview__icon" />}
          text={phone}
        />
      )}
      {!inputEmpty(location) && (
        <PreviewContactEntry
          icon={<MapPinIcon stroke="black" className="preview__icon" />}
          text={location}
        />
      )}
    </div>
  );
}
