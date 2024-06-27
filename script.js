const navEle = document.querySelector(".nav");
const hamburgerEle = document.querySelector(".hamburger");
hamburgerEle.addEventListener("click",() => {
    navEle.classList.toggle('nav--open');
    hamburgerEle.classList.toggle('hamburger--open');
})
navEle.addEventListener("click",() =>{
    navEle.classList.remove("nav--open");
    hamburgerEle.classList.remove("hamburger--open");


});
// Get the download button element
const downloadButton = document.getElementById('cvdwn');

// Add a click event listener to the download button
downloadButton.addEventListener('click', () => {
  // Create a temporary link element
  const link = document.createElement('a');

  // Set the download attribute and the file URL
  link.setAttribute('download', 'css/jossy photo.jpg');
  link.setAttribute('href', 'css/jossy photo.jpg');

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
});
// Get the form element
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  const name = document.getElementById('name-input').value;
  const email = document.getElementById('email-input').value;
  const message = document.getElementById('message-input').value;

  // Example action: Display form values in an alert (you can replace this with your desired action)
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Here you can perform other actions, such as sending the data via an AJAX request.
});