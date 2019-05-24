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
