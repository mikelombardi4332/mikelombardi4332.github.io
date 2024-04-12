document.addEventListener('DOMContentLoaded', function () {
  // Get all the anchor tags with class "enlarge-img"
  const enlargeLinks = document.querySelectorAll('.enlarge-img');

  // Loop through each anchor tag
  enlargeLinks.forEach(function (link) {
      // Add click event listener
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default link behavior

          // Get the image source
          const imgSrc = link.querySelector('img').getAttribute('src');

          // Create an enlarged image element
          const enlargedImg = document.createElement('img');
          enlargedImg.src = imgSrc;
          enlargedImg.classList.add('enlargedImg');

          // Append the enlarged image to the body
          document.body.appendChild(enlargedImg);

          // Create a close button
          const closeButton = document.createElement('button');
          closeButton.textContent = 'Close';
          closeButton.classList.add('closeButton');

          // Append the close button to the body
          document.body.appendChild(closeButton);

          // Add event listener to close button
          closeButton.addEventListener('click', function () {
              enlargedImg.remove(); // Remove enlarged image
              closeButton.remove(); // Remove close button
          });
      });
  });
});
