export const apiSignUp = async (formData) => {
  // 1. Validate data
  // 2. Send data to server
  // 2.1. Get data from form and convert to json
  // 2.2. Prepare url
  const url = "https://orbyjetsapp.com/api/";
  // Example using async/await
  const response = await fetch(url + "auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log("jsonResponse", jsonResponse);
  } else {
    console.error("Failed to signup");
  }

  const data = await response.json();
  return data;
};
