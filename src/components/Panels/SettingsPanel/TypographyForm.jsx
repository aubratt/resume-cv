import TypographyFormOption from "./TypographyFormOption";

export default function TypographyForm({ previewFont, setPreviewFont }) {
  return (
    <div className="typography-form">
      <TypographyFormOption
        fontFamily="Arial"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Book Antiqua"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Calibri"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Cambria"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Garamond"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Georgia"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Helvetica"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Lato"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Times New Roman"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Trebuchet MS"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
    </div>
  );
}
