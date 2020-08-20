/* 

Simulador de Trading - simplificando http://trading.mtrschool.com.ar/

Pasos:
1) LogIn
Se puede declarar un nombre de usuario o continuar como “Invitado”. 

2) Declaración de Variables Globales
Se muestran datos de las variables globales: Semana de Simulación: Se debe elegir Fecha Inicial y Fecha Final, esta última hasta el último día hábil anterior a la fecha actual.
- Monto Inicial = $1.000.000
- Comisiones por Rubro:
    - Agro = 1%
    - Financiero = 2%
    - Otros productos = 3%

3) Elección del Producto
Con la visualización de dos nuevas variables (“precios” y “márgenes”) el usuario deberá elegir sobre 5 productos posibles.

4) Tendencia histórica (se podría usar un JSON o API) 
Utilizando información del mercado se muestra un gráfico con la evolución de precios del producto una semana antes a la Fecha Inicial de la simulación.
Ver: https://apihub.primary.com.ar/assets/docs/PrimaryAPI-BO.pdf

5) ¿Comprar o Vender?
Teniendo en cuenta toda la información proporcionada, el usuario deberá elegir:
- la cantidad del producto que desea operar, con la limitación del monto inicial disponible
- si desea “comprar” o “vender” el producto

6) Simular iteraciones entre las Fecha inicial/final con los datos de la base (JSON o API)

7) Mostrar el resultado, sumando o restando al monto inicial.

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