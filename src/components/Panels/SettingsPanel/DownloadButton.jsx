import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({ printResume }) {
  return (
    <button onClick={printResume} className="panel-section__header">
      <ArrowDownTrayIcon />
      <span className="panel-section__title">Download</span>
    </button>
  )
}