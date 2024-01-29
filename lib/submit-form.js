const submitForm = async (formData) => {
  try {
    const response = await fetch(
      "http://10.10.23.61:8000/api/request-schedule/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

export default submitForm;
