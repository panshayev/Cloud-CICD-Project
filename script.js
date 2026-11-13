// 1. Показ уровня навыка по клику
const skillButtons = document.querySelectorAll('.skill');
const skillInfo = document.getElementById('skill-info');

skillButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    skillButtons.forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    skillInfo.textContent = btn.textContent + ': ' + btn.dataset.level;
  });
});

// 2. Фильтр проектов по типу
const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.filter;
    projects.forEach((p) => {
      const show = type === 'all' || p.dataset.type === type;
      p.classList.toggle('hidden', !show);
    });
  });
});
