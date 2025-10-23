export default async function API(formData) {
  const optionsLoginPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData }),
  };

  const value = await fetch(
    "http://localhost:1000/api/message",
    optionsLoginPost
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.message) return data.message;
    })
    .catch((error) => {
      return error;
    });

  return value;
}
