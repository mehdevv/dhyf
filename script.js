function showProject(id) {
    document.querySelectorAll('.project-detail').forEach(div => {
      div.style.display = 'none';
      div.classList.remove('active');
    });
    const target = document.getElementById(id);
    target.style.display = 'block';
    void target.offsetWidth;
    target.classList.add('active');
    window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' });
  }

  function hideProject() {
    document.querySelectorAll('.project-detail').forEach(div => {
      div.style.display = 'none';
      div.classList.remove('active');
    });
    const portfolioSection = document.getElementById('portfolio');
    window.scrollTo({ top: portfolioSection.offsetTop - 50, behavior: 'smooth' });
  }