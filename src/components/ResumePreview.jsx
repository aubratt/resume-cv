import { useEffect, useRef, useState } from "react";

export default function ResumePreview({ general, entries, printRef }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const PAGE_WIDTH = 816;
  const PAGE_HEIGHT = 1056;

  useEffect(() => {
    function updateScale() {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const styles = window.getComputedStyle(container);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      const usableHeight = container.clientHeight - paddingTop - paddingBottom;
      const scaleY = usableHeight / PAGE_HEIGHT;

      setScale(scaleY);
    }

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="preview" ref={containerRef}>
      <div className="preview__scale" style={{ transform: `scale(${scale})` }}>
        <div className="preview__page" ref={printRef}>
          <p>{general.name}</p>
        </div>
      </div>
    </div>
  );
}
