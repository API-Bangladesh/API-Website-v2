import { apiBaseUrl } from "./config";

export const submitContactUs = async (formData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/contact-us/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "Internal Server Error. Please try again later.",
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "Internal Server Error. Please try again later.",
    };
  }
};

export const submitRequestSchedule = async (formData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/request-schedule/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "Internal Server Error. Please try again later.",
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "Internal Server Error. Please try again later.",
    };
  }
};

export const submitProjectEstimate = async (formData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/estimate-project/`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "Internal Server Error. Please try again later.",
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "Internal Server Error. Please try again later.",
    };
  }
};
