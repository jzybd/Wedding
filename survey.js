const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBlock = document.getElementById('confirm-block');
const thanksBlock = document.getElementById('thanks-block');

    function showBlock(block) {
      block.classList.add('active');
    }

    function hideBlock(block) {
      block.classList.remove('active');
    }

    confirmBtn.addEventListener('click', () => {
      hideBlock(confirmBlock);
      setTimeout(() => showBlock(thanksBlock), 300);
    });

    cancelBtn.addEventListener('click', () => {
      hideBlock(thanksBlock);
      setTimeout(() => showBlock(confirmBlock), 300);
    });

    document.getElementById('survey-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Спасибо за ваши ответы!");
    });