import { apiBaseUrl } from "./config";

export const submitContactUs = async (formData) => {
  console.log(formData);

  try {
    const response = await fetch(`${apiBaseUrl}/contact-us/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // if (!response.ok) {
    //   throw new Error("Failed to submit form");
    // }

    console.log(response);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

export const submitRequestSchedule = async (formData) => {
  console.log(formData);
  try {
    const response = await fetch(`${apiBaseUrl}/request-schedule/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // if (!response.ok) {
    //   throw new Error("Failed to submit form");
    // }

    console.log(response);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
