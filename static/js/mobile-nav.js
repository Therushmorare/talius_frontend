const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
function toggleSidebar() {
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
}

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabContents.forEach(c => c.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
    tabButtons.forEach(b => b.classList.remove('text-indigo-600', 'border-b-2'));
    btn.classList.add('text-indigo-600', 'border-b-2');
  });
});
