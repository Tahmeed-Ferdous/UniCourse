const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Initially shrink the sidebar for larger screens
if (window.innerWidth > 801) {
  sidebar.classList.add('close');
}

// Toggle sidebar on button click
function toggleSidebar() {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  closeAllSubMenus();
}

// Open sidebar on hover (only above 801px)
sidebar.addEventListener('mouseenter', () => {
  if (window.innerWidth > 801) {
    sidebar.classList.remove('close');
  }
});

// Shrink sidebar on mouse leave (only above 801px)
sidebar.addEventListener('mouseleave', () => {
  if (window.innerWidth > 801) {
    sidebar.classList.add('close');
  }
});

// Function to toggle submenus
function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}

// Close all open submenus
function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}
