const cvBtn = document.querySelector('.cv');

cvBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href='./assets/Temuujin_CV.pdf';
    link.download = 'Temuujin_CV.pdf';
    link.click();
});

