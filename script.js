async function getData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    document.getElementById("image").src = data.message;
}
