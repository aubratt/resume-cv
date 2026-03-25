import TypographyFormOption from "./TypographyFormOption";

export default function TypographyForm({ previewFont, setPreviewFont }) {
  return (
    <div className="typography-form">
      <TypographyFormOption
        fontFamily="Arial"
        fontClass="arial"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Book Antiqua"
        fontClass="book-antiqua"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Calibri"
        fontClass="calibri"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Cambria"
        fontClass="cambria"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Garamond"
        fontClass="garamond"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Georgia"
        fontClass="georgia"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Helvetica"
        fontClass="helvetica"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Lato"
        fontClass="lato"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Times New Roman"
        fontClass="times-new-roman"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
      <TypographyFormOption
        fontFamily="Trebuchet MS"
        fontClass="trebuchet-ms"
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
      />
    </div>
  );
}
