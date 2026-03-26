import { useState, useEffect } from "react";

export default function useFormState(initialData, onSubmit, defaultValues) {
  const [formData, setFormData] = useState(initialData || defaultValues);

  useEffect(() => {
    setFormData(initialData || defaultValues);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return { formData, handleChange, handleSubmit };
}
