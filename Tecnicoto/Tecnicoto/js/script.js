let sucursales = [
    {numeroSuc:2,dir:"Av SanMartin 2095, Paternal"},
    {numeroSuc:6,dir:"Av La plata 2392, Pompeya"},
    {numeroSuc:7,dir:"Av J de Garay 2640, CABA"},
    {numeroSuc:13,dir:"Ruta 3 km 44.400, Gonzalez Catan"},
    {numeroSuc:18,dir:"Hipolito Yrigoyen 3702, Almagro"},
    {numeroSuc:19,dir:"Lima 1553, Constitucion"},
    {numeroSuc:20,dir:"Av El Cano 3693, Chacarita"},
    {numeroSuc:22,dir:"Av El Cano 3002, Belgrano"},
    {numeroSuc:24,dir:"Av Scalabrini Ortiz 1688, Palermo"},
    {numeroSuc:25,dir:"Brasil 575, San Telmo"},
    {numeroSuc:26,dir:"Cerviño 3515, Palermo"},
    {numeroSuc:35,dir:"Av Lope de Vega 2503, CABA"},
    {numeroSuc:37,dir:"Av Piedrabuena 4902, Villa Lugano"},
    {numeroSuc:38,dir:"Av San Martin 3055, Florida"},
    {numeroSuc:39,dir:"Av Emiliano Castro 7661, Liniers"},
    {numeroSuc:40,dir:"Av Eva Peron 2202, Flores"},
    {numeroSuc:41,dir:"Av Diaz Velez 4531, Almagro"},
    {numeroSuc:42,dir:"Jean Juarez 1093, Barrio Norte"},
    {numeroSuc:43,dir:"Av Boedo 777, Boedo"},
    {numeroSuc:44,dir:"Av Monroe 3284, Belgrano"},
    {numeroSuc:45,dir:"Av Cabildo 545, Belgrano"},
    {numeroSuc:46,dir:"Av Rivadavia 2846, Once"},
    {numeroSuc:47,dir:"Amenabar 2134, Belgrano"},
    {numeroSuc:48,dir:"Av Directorio 2647, Flores"},
    {numeroSuc:49,dir:"Libertador San Martin 251, Mar de Ajo"},
    {numeroSuc:50,dir:"Casa Central COTO"},
    {numeroSuc:51,dir:"Av Rivadavia 13810, Ramos Mejia"},
    {numeroSuc:52,dir:"Sanabria 3320, Villa Devoto"},
    {numeroSuc:53,dir:"Av La Plata 3635, Santos Lugares"},
    {numeroSuc:55,dir:"Av Avellaneda 3758, Floresta"},
    {numeroSuc:56,dir:"Honduras 3862, Palermo"},
    {numeroSuc:57,dir:"San Martin 1866, San Martin"},
    {numeroSuc:58,dir:"Viamonte 1571, Tribunales"},
    {numeroSuc:59,dir:"Av Monroe 5055, Villa Urquiza"},
    {numeroSuc:60,dir:"Av j B Alberdi 1737, Flores"},
    {numeroSuc:61,dir:"Alsina 2300, Once"},
    {numeroSuc:63,dir:"Av del Barco Centenera 3402, Pompeya"},
    {numeroSuc:64,dir:"Av Mitre 3300, Sarandi"},
    {numeroSuc:65,dir:"Hipolito Yrigoyen 380, Quilmes"},
    {numeroSuc:66,dir:"Maure 1725, Belgrano"},
    {numeroSuc:67,dir:"Albarellos 854, Acassuso"},
    {numeroSuc:68,dir:"Jorge Newbery 555, Lomas de San Isidro"},
    {numeroSuc:69,dir:"Av del Libertador 18213, Punta Chica"},
    {numeroSuc:70,dir:"Lasalle 653, San Isidro"},
    {numeroSuc:71,dir:"Av del Libertador 3011, Olivos"},
    {numeroSuc:74,dir:"Gallo 250, Almagro"},
    {numeroSuc:75,dir:"Av B rivadavia 2602 y Warnes, Lanus"},
    {numeroSuc:78,dir:"Mexico 2236, Balvanera"},
    {numeroSuc:80,dir:"French 2417, Recoleta"},
    {numeroSuc:82,dir:"Murillo 551, Villa Crespo"},
    {numeroSuc:83,dir:"Av Rivadavia 9840, Villa Luro"},
    {numeroSuc:84,dir:"Castro Barros 30, Almagro"},
    {numeroSuc:85,dir:"Av Eva Peron 4730, Mataderos"},
    {numeroSuc:88,dir:"Av La Plata 541, Caballito"},
    {numeroSuc:90,dir:"Segurola 1701, Villa Devoto"},
    {numeroSuc:91,dir:"Agüero 616, Abasto"},
    {numeroSuc:92,dir:"Av Maipu 1758, Vicente Lopez"},
    {numeroSuc:93,dir:"Centro Distribucion COTO"},
    {numeroSuc:94,dir:"Boulogne Sur Mer Esq de la Cooperacion, Tapiales"},
    {numeroSuc:95,dir:"Mendoza 3905, Echesortu, Rosario"},
    {numeroSuc:96,dir:"Cordoba y Circunvalacion, Fisherton, Rosario"},
    {numeroSuc:97,dir:"Urquiza 1644, Centro, Rosario"},
    {numeroSuc:99,dir:"Tres de Febrero 1602, Centro, Rosario"},
    {numeroSuc:101,dir:"Italia 62, Avellaneda"},
    {numeroSuc:103,dir:"Av Gaona 1950, Caballito"},
    {numeroSuc:104,dir:"Calchaqui 1740, Quilmes"},
    {numeroSuc:105,dir:"Boulevar Bs. As. 710, Montegrande"},
    {numeroSuc:107,dir:"Hipolito Yrigoyen 10699, Temperley"},
    {numeroSuc:108,dir:"Cabildo 4125, Nuñez"},
    {numeroSuc:109,dir:"Coronel Juan Pirán 801, Paraná, Entre Ríos"},
    {numeroSuc:110,dir:"Soldado de la Frontera 5258, Villa Lugano"},
    {numeroSuc:111,dir:"Av Balbin 2030, San Martin"},
    {numeroSuc:116,dir:"Martin de Gainza 90, Caballito"},
    {numeroSuc:117,dir:"Juan M Estrada 878, Campana"},
    {numeroSuc:118,dir:"Rivadavia 3396, Santa Fe"},
    {numeroSuc:121,dir:"Larrazábal 3443, Mataderos"},
    {numeroSuc:123,dir:"O` Higgins 1280, Bella Vista"},
    {numeroSuc:124,dir:"Av San Juan 2168, San Cristobal"},
    {numeroSuc:125,dir:"Lope de Vega 1742, Monte Castro"},
    {numeroSuc:129,dir:"Colectora autopista Oeste y Comesaña, Ciudadela"},
    {numeroSuc:130,dir:"Av Dardo Rocha 251, Bernal, Quilmes"},
    {numeroSuc:131,dir:"Hipolito Yrigoyen 1826, Jose C. Paz"},
    {numeroSuc:136,dir:"Pedro Goyena 565, Caballito"},
    {numeroSuc:142,dir:"Juan B Justo 5800 y Argerich, Ciudadela"},
    {numeroSuc:149,dir:"Calle 43 782, La Plata"},
    {numeroSuc:151,dir:"Asamblea 1100, Asamblea"},
    {numeroSuc:153,dir:"Alvarez Jonte 2502 y Artigas, Paternal"},
    {numeroSuc:154,dir:"Tapia de Cruz Nº 420, Escobar"},
    {numeroSuc:155,dir:"HIGHLAND, Del Viso"},
    {numeroSuc:158,dir:"Charcas 2980, Charcas"},
    {numeroSuc:159,dir:"Bartolome Mitre 1558, Mitre"},
    {numeroSuc:160,dir:"Av. Antártida Argentina 1160, Retiro"},
    {numeroSuc:161,dir:"Ruta 9 Km 99,5, Granja San Pedro"},
    {numeroSuc:162,dir:"Tortugas Country Club -G.B.A., Tortuguitas"},
    {numeroSuc:163,dir:"Junin y Santa Fe, Barrio Norte"},
    {numeroSuc:164,dir:"Jose Hernandez 2955, Villa Ballester"},
    {numeroSuc:165,dir:"Av Junin y Thedy, Rosario Talleres"},
    {numeroSuc:167,dir:"Juan B Justo y Nazca, Flores"},
    {numeroSuc:168,dir:"Av Corrientes 5748 y Juan B Justo, Villa Crespo"},
    {numeroSuc:170,dir:"Av Libertador 6840, Nuñez"},
    {numeroSuc:171,dir:"Av Sarmiento 524, ruta 205, Tristan Suarez"},
    {numeroSuc:174,dir:"Cullen 5085, Villa Urquiza"},
    {numeroSuc:175,dir:"Tte. Gral Juan D Peron 2070, Balbanera"},
    {numeroSuc:176,dir:"T Garcia 2419, Belgrano"},
    {numeroSuc:178,dir:"Ruta 11 Km 404, Madariaga"},
    {numeroSuc:179,dir:"Colastine y Av 27 de Febrero, Santa Fe Puerto"},
    {numeroSuc:180,dir:"San Pedrito 72, Flores"},
    {numeroSuc:181,dir:"Ricardo Balbin 4027, Saavedra"},
    {numeroSuc:183,dir:"Av Hipolito Yrigoyen 8028, Banfield"},
    {numeroSuc:184,dir:"Tortugas Open Mall"},
    {numeroSuc:185,dir:"Coto Neuquén, Avenida Doctor Ramón, Neuquén"},
    {numeroSuc:186,dir:"Av Hipolito Yrigoyen 6174, Remedios de Escalada"},
    {numeroSuc:188,dir:"Av Mitre 2951, Munro"},
    {numeroSuc:189,dir:"Av Ruta 205 Entre 52 y Reconquista, Ezeiza"},
    {numeroSuc:192,dir:"Uruguay 4691, San Fernando"},
    {numeroSuc:196,dir:"Lagos Garcia y Neptuno, Provincia de Buenos Aires"},
    {numeroSuc:197,dir:"Av Belgrano 950, Garin"},
    {numeroSuc:199,dir:"Santa Rosa 1753, Castelar"},
    {numeroSuc:203,dir:"Av Santa Fe 3760, Palermo"},
    {numeroSuc:204,dir:"Lavalle ¿¿¿¿????"},
    {numeroSuc:208,dir:"Av Rivadavia y Roque Sáenz Peña, Merlo"},
    {numeroSuc:209,dir:"Av. Perú y Pellegrini Carlos, Mendoza"},
    {numeroSuc:215,dir:"Almirante Brown y La Roche, Moron"},
    {numeroSuc:219,dir:"Av Victorica 598, Moreno"},
    {numeroSuc:220,dir:"Isabel la Catolica 50, Barracas"},
    {numeroSuc:235,dir:"Qilmes"},
]
// Realiza busqueda de la sucursal ingresada e imprimir la direccion
let num_suc = document.getElementById("n-suc");
let dir_suc = document.getElementById("dir-suc");
let buscar = document.querySelector(`#buscar`);
buscar.addEventListener(`click`, agregarSuc);
function agregarSuc(){
    let input = document.querySelector(`#ingresar_num`).value;
    if (input == 69420) {
        alert("Tecni-Coto 2022. Idea: Miranda Emiliano. Desarrollo: Olivera Rodrigo, Padin Gabriel");
    } else {
        for( let i=0; i < sucursales.length; i++){
            let numerosSuc = sucursales[i].numeroSuc;    
            if(numerosSuc == input){
                num_suc.innerHTML = input;
                dir_suc.innerHTML = sucursales[i].dir;
            }
        }
    }
}
// Copar al portapapeles
function CopyToClipboard()
{
var r = document.createRange();
r.selectNode(document.getElementById("dir-suc"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert("Direccion copiada");
}
// Realizar busqueda al apretar enter
let input = document.getElementById("ingresar_num");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buscar").click();
    }
});