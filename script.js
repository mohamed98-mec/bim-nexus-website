// Simple tab switcher script
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab and related content
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});
