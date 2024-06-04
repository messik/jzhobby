const wave = document.querySelector('.wave');

function generateWave() {
    let waveHTML = '';
    for (let i = 0; i < 50; i++) {
        waveHTML += '<div></div>';
    }
    wave.innerHTML = waveHTML;
}

generateWave();




let obecnyObraz = 0;
        const obrazy = document.querySelectorAll(".obraz");
        const powiekszenieContainer = document.getElementById("powiekszenie-container");
        const powiekszonyObraz = document.getElementById("powiekszony-obraz");

        function pokazPowiekszenie(src) {
            powiekszonyObraz.src = src;
            powiekszenieContainer.style.display = "flex";
        }

        function zamknijPowiekszenie() {
            powiekszenieContainer.style.display = "none";
        }

        function przewinLewo() {
            if (obecnyObraz > 0) {
                obecnyObraz--;
                pokazPowiekszenie(obrazy[obecnyObraz].src);
            }
        }

        function przewinPrawo() {
            if (obecnyObraz < obrazy.length - 1) {
                obecnyObraz++;
                pokazPowiekszenie(obrazy[obecnyObraz].src);
            }
        }