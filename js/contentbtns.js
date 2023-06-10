const buttons = document.querySelectorAll('.my-button');
const contentDivs = document.querySelectorAll('.content');

let activeButton = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle content visibility
    contentDivs.forEach((contentDiv) => {
      if (contentDiv.id === button.dataset.content) {
        contentDiv.classList.toggle('hidden');
      } else {
        contentDiv.classList.add('hidden');
      }
    });
    // Show hidden buttons
    buttons.forEach((btn) => {
      if (!btn.classList.contains('hidden') || btn === activeButton) {
        return;
      }
      
      let relatedContent = btn.dataset.content;
      if (relatedContent !== activeButton.dataset.content) {
        btn.classList.remove('hidden');
      }
    });
  });
});