export default async function API(formData) {
  const optionsLoginPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData }),
  };

  fetch(import.meta.env.VITE_URL, optionsLoginPost)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) return alert(data.message);
    })
    .catch((error) => error(error));
}
