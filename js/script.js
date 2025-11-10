window.onload = function() {
  const text = "Utkarsh Tripathi";
  const nameElement = document.querySelector(".name");
  nameElement.textContent = ""; // purana text hatao

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      nameElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect(); // refresh hone ke sath chalu hoga
};
