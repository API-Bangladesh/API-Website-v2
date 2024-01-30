export const convertTimeTo24HourFormat = (time) => {
  const [hour, minute, period] = time.split(/:|\s/);
  let hour24 = parseInt(hour, 10);
  if (period === "PM" && hour24 !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour24 === 12) {
    hour24 = 0;
  }

  const formattedHour = hour24.toString().padStart(2, "0");
  const formattedMinute = minute.padStart(2, "0");

  return `${formattedHour}:${formattedMinute}:00`;
};

export const formatDate = (dateString) => {
  const dateObject = new Date(dateString);

  if (isNaN(dateObject.getTime())) {
    // Handle invalid date
    console.error("Invalid date:", dateString);
    return "";
  }

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
