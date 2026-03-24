function showProject(id) {
    document.querySelectorAll('.project').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.project-button').forEach(b => b.classList.remove('active'));

    const projectEl = document.getElementById(id);
    if (projectEl) projectEl.classList.add('active');

    document.querySelectorAll('.project-button').forEach(btn => {
    if (btn.dataset.project === id) {
        btn.classList.add('active');
    }
    });

    history.replaceState(null, '', `?project=${id}`);
}

// Attach event listeners (no inline onclick)
document.querySelectorAll('.project-button').forEach(btn => {
    btn.addEventListener('click', () => {
        showProject(btn.dataset.project);
    });
});

// Handle URL param on load
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const project = params.get('project') || 'p1';
    showProject(project);
};