
let lastScroll = 0;
// Créer un événément au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll){    // Vérifie si le défilement actuel est vers le haut (scrollY plus petit que lastScroll).
        navbar.style.top =0;        // Si c'est le cas, place la barre de navigation en haut de la page (top à 0).
    } else {
        navbar.style.top = "-60px"        // Sinon, cache la barre de navigation en la déplaçant vers le haut (top à -60px).
    }
    lastScroll = window.scrollY    // Met à jour la variable lastScroll avec la position actuelle du défilement.

})
// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
