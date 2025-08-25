const navButtons = document.querySelectorAll(".nav button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      // remove active from all buttons
      navButtons.forEach(btn => btn.classList.remove("active"));

      // add active to clicked button
      button.classList.add("active");
    });
  });

  function showSection(id) {
  // Hide all menu-category sections
  let sections = document.querySelectorAll(".menu-category");
  sections.forEach(sec => sec.style.display = "none");

  if (id === "all") {
    // Show all categories if "All Menu" is clicked
    sections.forEach(sec => sec.style.display = "block");
  } else {
    // Show only the clicked category
    document.getElementById(id).style.display = "block";
  }
}
