/* 
Simulador de Trading simplificando http://trading.mtrschool.com.ar/

Pasos:
1) LogIn
2) Variables Globales
Se muestran datos de las variables globales para las funciones “comprar” y “vender”
    Input: Fechas: Inicial / Final
    Monto Inicial
    Monto Inicial = 1000000
    Comisiones
    Márgen
3) Elección del Producto
4) Tendencia histórica (se podría usar un JSON o API) https://apihub.primary.com.ar/assets/docs/PrimaryAPI-BO.pdf
5) ¿Comprar o Vender?
6) Simular iteraciones “Fecha inicial/final” / Mostrar progresión mediante animación
7) Mostrar un resultado:
 */

var userName;
var date; //falta revisar After Class//
var productos =[dolar, oro, petroleo, soja, rfx20];
var montoInicial = 1000000;

function producto(margen, comision, precio) {
    this.margen = margen;
    this.comision = comision;
    this.precio = precio;
    
    this.getPrecio = function () {return this.precio;}
    this.getMargen = function () {return this.margen}
    }

var dolar = new producto (10600, 0.02, 74);
var oro =  new producto ((130 * dolar.precio), 0.03, 2058);
var soja =  new producto ((11 * dolar.precio), 0.01, 74.31);
var petroleo =  new producto ((100 * dolar.precio), 0.03, (42 * dolar.precio));
var rfx20 = new producto (9000, 0.02, (244 * dolar.precio));


function login(){
    userName = prompt("Ingrese nombre de usuario");
    return userName;
//me falta hacer que los botones me lleven al siguiente paso//
}

function invitado(){
    userName = "Invitado";
    return userName;
//me falta hacer que los botones me lleven al siguiente paso//
}