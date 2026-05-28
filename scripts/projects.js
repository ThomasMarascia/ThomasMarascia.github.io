function showProject(id) {
    document.querySelectorAll('.project').forEach(p => p.style.display = 'none');

    const el = document.getElementById(id);
    if (el) el.style.display = 'block';

    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.project === id);
    });

    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebarMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(sidebar);
    if (bsCollapse && window.innerWidth < 992) {
    bsCollapse.hide();
    }

    history.replaceState(null, '', `?project=${id}`);
}

document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    showProject(btn.dataset.project);
    });
});

const params = new URLSearchParams(window.location.search);
const project = params.get('project') || 'p1';
showProject(project);