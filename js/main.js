$(document).ready(function () {
    let mapVelos = new MapClass("#map_container", "map", 48.692054, 6.184417, 14, "https://api.jcdecaux.com/vls/v1/stations?contract=Nancy&apiKey=436674b7e055dae4d0b0e0ab7ad464ed6c168066");
    let resaVelos = new ResaClass("#form_bikes", 20 * 60 * 1000, new CanvasClass("#canvas_div", "#canvas_resa"));
    let canvasVelos = new CanvasClass("#canvas_div", "#canvas_resa");
});