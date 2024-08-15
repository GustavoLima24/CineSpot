const carousel = document.querySelector(".categoria-videos"); // Seleciona o container das imagens
const carousel2 = document.querySelector(".categoria-videos2"); // Seleciona o container das imagens

let isDragging = false;
let startX;
let velocity = 0;
let lastTime = 0;

const deceleration = 0.95; // Adjust this value to control the speed of deceleration
const forceMultiplier = 10; // Adjust this value to control the force of the push

carousel.addEventListener("mousedown", (event) => {
  // Prevent text selection on drag
  event.preventDefault();

  isDragging = true;
  startX = event.clientX;
  lastTime = event.timeStamp; // Store the timestamp of the mousedown event
});

carousel.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  const movement = event.clientX - startX;

  // Prevent scrolling when dragging at the edges
  if (
    movement > 0 && carousel.scrollLeft === 0
  ) {
    event.preventDefault();
  } else if (
    movement < 0 && carousel.offsetWidth + carousel.scrollLeft === carousel.scrollWidth
  ) {
    event.preventDefault();
  }

  // Apply force multiplier and update scrollLeft
  carousel.scrollLeft -= movement * forceMultiplier;
  startX = event.clientX; // Update startX for next movement calculation
  
  // Update velocity based on time and movement
  const currentTime = event.timeStamp;
  velocity = (movement / (currentTime - lastTime)) * deceleration;
  velocity += 0.1; // Add acceleration
  lastTime = currentTime;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;

  // Start a loop to gradually reduce velocity and update scrollLeft
  let timerId = null;
  const animate = () => {
    velocity *= deceleration; // Apply deceleration
    carousel.scrollLeft -= velocity;

    if (Math.abs(velocity) > 0.1) { 
      // Continue animation if velocity is above threshold
      timerId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(timerId); // Stop animation
    }
  };
  animate();
});

// Stop dragging when mouse button is released outside the carousel
document.addEventListener("mouseup", (event) => {
  if (!carousel.contains(event.target)) {
    isDragging = false;
  }
});








carousel2.addEventListener("mousedown", (event) => {
  // Prevent text selection on drag
  event.preventDefault();

  isDragging = true;
  startX = event.clientX;
  lastTime = event.timeStamp; // Store the timestamp of the mousedown event
});

carousel2.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  const movement = event.clientX - startX;

  // Prevent scrolling when dragging at the edges
  if (
    movement > 0 && carousel2.scrollLeft === 0
  ) {
    event.preventDefault();
  } else if (
    movement < 0 && carousel2.offsetWidth + carousel2.scrollLeft === carousel2.scrollWidth
  ) {
    event.preventDefault();
  }

  // Apply force multiplier and update scrollLeft
  carousel2.scrollLeft -= movement * forceMultiplier;
  startX = event.clientX; // Update startX for next movement calculation
  
  // Update velocity based on time and movement
  const currentTime = event.timeStamp;
  velocity = (movement / (currentTime - lastTime)) * deceleration;
  velocity += 0.1; // Add acceleration
  lastTime = currentTime;
});

carousel2.addEventListener("mouseup", () => {
  isDragging = false;

  // Start a loop to gradually reduce velocity and update scrollLeft
  let timerId = null;
  const animate = () => {
    velocity *= deceleration; // Apply deceleration
    carousel2.scrollLeft -= velocity;

    if (Math.abs(velocity) > 0.1) { 
      // Continue animation if velocity is above threshold
      timerId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(timerId); // Stop animation
    }
  };
  animate();
});

// Stop dragging when mouse button is released outside the carousel
document.addEventListener("mouseup", (event) => {
  if (!carousel2.contains(event.target)) {
    isDragging = false;
  }
});