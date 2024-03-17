document.addEventListener("DOMContentLoaded", function() {
    // Get all skill levels
    const skillLevels = document.querySelectorAll(".skill-level");
  
    // Animate skill levels on page load
    skillLevels.forEach(skill => {
      const width = skill.style.width;
      skill.style.width = "0";
      setTimeout(() => {
        skill.style.width = width;
      }, 500);
    });
  });
  
