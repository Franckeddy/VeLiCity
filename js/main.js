// Gestion de l'affichafe de transition

// Un seul fa
let fa = document.querySelector('.fa')
window.setInterval(function () {
    fa.classList.toggle('blue')
}, 1000)

// A faire pour tout les fa
let fas = document.querySelectorAll('fa')
for (let i = 0; i < fas.length; i++) {
    (function f(fa) {
        window.setInterval(function () {
            fa.classList.toggle('blue')
        }, 1000)
    })(fas[i])
}

// pour l'instant ne fonctionne pas sur ce que je veux !!!!!!

$(document).ready(function() {
    let mapVelos = new MapClass('#map_container','map', 48.692054, 6.184417, 14, 'https://api.jcdecaux.com/vls/v1/stations?contract=Nancy&apiKey=436674b7e055dae4d0b0e0ab7ad464ed6c168066');
    let resaVelos = new ResaClass('#form_bikes', 20 * 60 * 1000, new CanvasClass('#canvas_div', '#canvas_resa'));
    let canvasVelos = new CanvasClass('#canvas_div', '#canvas_resa');
});