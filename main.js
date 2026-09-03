const cvBtn = document.querySelector('.cv');

cvBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href='./assets/cv.pdf';
    link.download = 'Temuujin_CV.pdf';
    link.click();
});

