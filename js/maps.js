// Création de la map
let Maps = L.map('mapid').setView([48.692054, 6.184417], 14);
// Tableau où sera inséré les différents marqueurs, cela servira à les rassembler (marker Clusterer)
let tableauMarqueur = [];

// Méthode pour l'attribution d'une image de marqueur pour les stations ouverte et fermer
/*
function iconMarqueur(statusStation) {
    let greenIcon = L.icon({
        iconUrl: 'leaf-green.png',
        shadowUrl: 'leaf-shadow.png',

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    let redIcon = L.icon({
        iconUrl: 'leaf-red.png',
        shadowUrl: 'leaf-shadow.png',

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    if (statusStation === "OPEN") {
        this.iconBase = greenIcon
    } else if (statusStation === "CLOSED") {
        this.iconBase = redIcon;
    }
}
*/

// Méthode d'intégration des marqueurs sur la carte
/*
function initMarqueur(positionStation) {
    let marqueur = new L.marker({
        map: map,
        icon: this.iconBase,
        position: positionStation // Positionne les marqueurs
    });
    tableauMarqueur.push(marqueur); // Stocke les marqueurs dans un tableau qui sera utilisé par "markerClusterer"
}
*/

// Méthode pour le regroupement de marqueurs
/*
function regroupementMarqueurs() {
    let marqueurCluster = new MarkerClusterer(map, this.tableauMarqueur,
        {
            imagePath: "./images/marqueurs/m", // Icônes du markerClusterer
        });
}
*/

// Street View
/*
function vueRue(positionStation) {
    let streetView = new L.maps.StreetViewPanorama(document.getElementById("streetView"), {
        position: positionStation,
        linksControl: false,
        panControl: false
    });
}
*/

// Création du calque image
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiZnJhbmNrZWRkeSIsImEiOiJjandkbWNkbWQwbjlyM3pxMWdkejhkNnBpIn0.E8zcyasXSpWeHWT6c1z4fA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(Maps);

// Rendu plus joli
let OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(Maps);

// Station
let Station = {
    // Attributs
    nom: null, // Nom de la station
    adresse: null, // Adresse de la station
    etat: null, // Etat de la station
    nbVelo: null, // Nombre(s) de vélo(s) à la station
    nbAttache: null, // Nombre(s) d'attache(s) à la station
    emplacementDonnees: document.getElementById("listeInfo").querySelectorAll("span"), // Endroit où les données seront insérer au HTML
    autorisation: null, // Attribut d'autorisation de réservation

    // Méthode Ajax qui permettra de récupérer la liste des stations Vélib'
    ajaxGet: function (url, callback) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle de "callback" en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    },

    // Méthode qui remplit les attributs de données de la station
    traitementDonneesStation: function (donneesStation) {
        // Nom
        this.nom = donneesStation.name;
        // Adresse
        this.addresse = donneesStation.address;
        // Etat (ouvert ou fermer)
        this.etat = donneesStation.status;
        // Nombre de velo(s)
        if ((sessionStorage.getItem("minutes")) && (Compteur.nomStation === this.nom)) { // Si une réservation est en cours dans la même station
            this.nbVelo = donneesStation.available_bikes - 1; // On enlève un vélo à la station
        } else { // Sinon
            this.nbVelo = donneesStation.available_bikes; // On affiche le véritable nombre de vélos disponible
        }
        // Nombre(s) d'attache(s)
        this.nbAttache = donneesStation.available_bike_stands;
    },

    // Méthode pour insérer les données dans la page
    insertionDonneesStation: function () {
        // Insertion des données dans la page
        document.getElementById("nomStation").innerHTML = this.nom;
        document.getElementById("adresseStation").innerHTML = this.adresse;
        document.getElementById("etatStation").innerHTML = this.etat;
        document.getElementById("veloDispo").innerHTML = this.nbVelo;
        document.getElementById("attacheDispo").innerHTML = this.nbAttache;
    },

    // Méthode qui autorise ou non la réservation
    autorisationReservation: function () {
        if (this.etat === "CLOSED") { // Si la station est fermée

            // Traduction du texte
            this.etat = "FERMER";
            // Le champ d'état de la station sera marqué en rouge
            document.getElementById("etatStation").style.color = "red";
            // Le nombre de vélo sera marqué en rouge
            document.getElementById("veloDispo").style.color = "red";
            // Interdit la réservation
            this.autorisation = false;

        } else if (this.etat === "OPEN") { // Sinon si la Station est ouverte

            // Traduction du texte
            this.etat = "OUVERT";
            // Le champ retrouve sa couleur d'origine
            document.getElementById("etatStation").style.color = "";
            // Autorise la réservation
            this.autorisation = true;

            if (this.nbVelo === 0) { // Si le nombre de vélos est à 0

                // Le champ sera marqué en rouge
                document.getElementById("veloDispo").style.color = "red";
                // Interdit la réservation
                this.autorisation = false;

            } else if (this.nbVelo > 0) {

                // Le champ retrouve sa couleur d'origine
                document.getElementById("veloDispo").style.color = "";

            }
        }
    }
};

// Récupération de la liste des stations
/*
Station.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Nancy&apiKey=436674b7e055dae4d0b0e0ab7ad464ed6c168066", function (reponse) {
    listeStations = JSON.parse(reponse);

    // Parcours les données des stations
    listeStations.forEach(function (reponseInfoStation) {

        // Appel de la méthode d'attribution d'une icône de marqueur
        iconMarqueur(reponseInfoStation.status);

        // Appel de la méthode initMarqueur pour positionner les marqueurs sur la carte
        initMarqueur(reponseInfoStation.position);

        // Ajoute un événement lors du clic sur un marqueur
        L.maps.event.addListener(marqueur, "click", function () {

            // Insertion des données dans l'objet "station"
            Station.traitementDonneesStation(reponseInfoStation);

            // On cache les différentes parties de la page
            document.getElementById("messageErreur").style.display = "none"; // Les messages d'erreur
            document.getElementById("containerCanvas").style.display = "none"; // Le canvas

            // Apparition du bloc contenant les infos de la station sélectionnée
            document.getElementById("infoStation").style.display = "block";

            // Insertion vue Street View
            vueRue(reponseInfoStation.position);

            // Vérification de l'autorisation de réservation
            Station.autorisationReservation();

            // Insertion des données dans le bloc
            Station.insertionDonneesStation();

        }); // Fin événement clic marqueur
    }); // Fermeture de la boucle pour le parcours des données des stations

    // Événements pour le clic sur le bouton de réservation
    document.getElementById("bouttonReservation").querySelector("button").addEventListener("click", function () {

        if (Station.autorisation) { // Si l'autorisation de réservation est à true

            // Insertion du nom de la station
            document.getElementById("containerCanvas").querySelector("strong").innerHTML = Station.nom;
            // Le canvas apparaît
            document.getElementById("containerCanvas").style.display = "block";
            // Fait remonter la page pour voir apparaître le canvas
            window.scrollTo(0, 900);

        } else { // Si l'autorisation est à false

            // On fait apparaître le message d'erreur
            document.getElementById("messageErreur").style.display = "block";
            // Le message d'erreur disparaît au bout de 5 secondes
            setTimeout(function () {
                document.getElementById("messageErreur").style.display = "none";
            }, 5000);
        }

    });

    // Appel de la méthode "marker Clusterer"
    regroupementMarqueurs();
});
*/
