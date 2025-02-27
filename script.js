const touches = [...document.querySelectorAll('.button')];
const listeKey = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.event.key.toString();
    calculer(valeur)
});
document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
});

const calculer = (valeur) =>{
    if (listeKey.includes(valeur)) {
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexkeycode = listeKey.indexOf(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
        }
        
    }
}
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
});