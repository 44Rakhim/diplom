const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const targetBlock = document.getElementById(targetId);
    const currentState = btn.dataset.state;

    if (currentState === 'closed') {
      targetBlock.classList.add('open');
      btn.dataset.state = 'open';
    } else {
      targetBlock.classList.remove('open');
      btn.dataset.state = 'closed';
    }
  });
});