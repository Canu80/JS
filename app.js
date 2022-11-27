//VARIABLES

// Lista de productos
const producto01 = 50;
const producto02 = 70;
const producto03 = 35;
const producto04 = 45;

// Stock de productos
let stockproducto01 = 15;
let stockproducto02 = 7;
let stockproducto03 = 13;
let stockproducto04 = 5;

// Intereses de cuotas
const tres_cuotas = 1.05;
const seis_cuotas = 1.10;
const doce_cuotas = 1.15;

// Carrito
let orden = 0;
let cantidad = 0;
let carrito_producto01 = 0;
let carrito_producto02 = 0;
let carrito_producto03 = 0;
let carrito_producto04 = 0;

let productos_carrito = 0;
let carrito_total = 0;

let subtotal_producto01 = 0;
let subtotal_producto02 = 0;
let subtotal_producto03 = 0;
let subtotal_producto04 = 0;

// Interación con el usuario
let respuesta = "";

// FUNCIONES

function opciones() {
  if (
    respuesta == "Si" ||
    respuesta == "si" ||
    respuesta == "sI" ||
    respuesta == "SI" ||
    respuesta == "S" ||
    respuesta == "s"
  ) {
    orden = 0;
    orden = prompt(
      `Por favor elija el producto que desea adquirir

       1: Bolsa de alimento para gatos de 10Kg.
       2: Bolsa de alimento para perros de 15Kg.
       3: Bolsa de alimento para gatos de 5Kg.
       4: Bolsa de alimento para perros de 5Kg.


       El monto a abonar hasta el momento es de: $` +
        carrito_total +
        `
       Usted tiene ` +
        productos_carrito +
        ` producto/s en su carrito hasta el momento.
       `
    );

    calculo();
  } else {
    resultado();
  }
}

function calculo() {
  switch (orden) {
    case "1":
      carrito_producto01 = 0;

      orden = prompt(
        `Usted ha elegido la bolsa de alimento para gatos de 10Kg
            
            En estos momentos quedan: ` +
          stockproducto01 +
          ` unidades disponibles.
    
            ¿Cuántas quiere ordenar?
    
            `
      );

      if (orden >= 1 && orden <= stockproducto01) {
        stockproducto01 = Number(stockproducto01) - Number(orden);
        carrito_producto01 = Number(carrito_producto01) + Number(orden);
        carrito_total =
          Number(carrito_producto01) * Number(producto01) +
          Number(carrito_total);
        subtotal_producto01 = Number(carrito_producto01) * Number(producto01);
        productos_carrito =
          Number(carrito_producto01) + Number(productos_carrito);
      } else {
        orden = 0;
        if (orden > stockproducto01) {
          alert("No hay stock suficiente");
          opciones();
        }
      }

      respuesta = prompt(
        `Usted a seleccionado ` +
          orden +
          ` bolsa/s de alimento para gatos de 10Kg
                
                
                El valor de cada bolsa es de ` +
          producto01 +
          `.
                El monto total a pagar es de  $` +
          subtotal_producto01 +
          `.
                
                ¿Desea agregar algún producto más a su carrito?
    
                `
      );

      if (
        respuesta == "Si" ||
        respuesta == "si" ||
        respuesta == "sI" ||
        respuesta == "SI" ||
        respuesta == "S" ||
        respuesta == "s"
      ) {
        opciones();
      } else {

        resultado();
      }
      break;

    case "2":
      carrito_producto02 = 0;
      orden = prompt(
        `Usted ha elegido la bolsa de alimento para perros de 15Kg
            
            En estos momentos quedan: ` +
          stockproducto02 +
          ` unidades disponibles.
    
            ¿Cuántas quiere ordenar?
    
            `
      );

      if (orden >= 1 && orden <= stockproducto02) {
        stockproducto02 = Number(stockproducto02) - Number(orden);
        carrito_producto02 = Number(carrito_producto02) + Number(orden);
        carrito_total =
          Number(carrito_producto02) * Number(producto02) +
          Number(carrito_total);
        subtotal_producto02 = Number(carrito_producto02) * Number(producto02);
        productos_carrito =
          Number(carrito_producto02) + Number(productos_carrito);
      } else {
        orden = 0;
        if (orden > stockproducto02) {
          alert("No hay stock suficiente");
          menu();
        }
      }

      respuesta = prompt(
        `Usted a seleccionado ` +
          orden +
          ` bolsa/s de alimento para perros de 15Kg
                
                
                El valor de cada bolsa es de ` +
          producto02 +
          `.
                El monto total a pagar es de  $` +
          subtotal_producto02 +
          `.
                
                ¿Desea agregar algún producto más a su carrito?
    
                `
      );

      if (
        respuesta == "Si" ||
        respuesta == "si" ||
        respuesta == "sI" ||
        respuesta == "SI" ||
        respuesta == "S" ||
        respuesta == "s"
      ) {
        opciones();
      } else {
        resultado();
      }
      break;

    case "3":
      carrito_producto03 = 0;
      orden = prompt(
        `Usted ha elegido la bolsa de alimento para gatos de 5Kg
                        
                        En estos momentos quedan: ` +
          stockproducto03 +
          ` unidades disponibles.
                
                        ¿Cuántas quiere ordenar?
                
                        `
      );

      if (orden >= 1 && orden <= stockproducto03) {
        stockproducto03 = Number(stockproducto03) - Number(orden);
        carrito_producto03 = Number(carrito_producto03) + Number(orden);
        carrito_total =
          Number(carrito_producto03) * Number(producto03) +
          Number(carrito_total);
        subtotal_producto03 = Number(carrito_producto03) * Number(producto03);
        productos_carrito =
          Number(carrito_producto03) + Number(productos_carrito);
      } else {
        orden = 0;
        if (orden > stockproducto03) {
          alert("No hay stock suficiente");
          menu();
        }
      }

      respuesta = prompt(
        `Usted a seleccionado ` +
          orden +
          ` bolsa/s de alimento para gatos de 5Kg
                            
                            
                            El valor de cada bolsa es de ` +
          producto03 +
          `.
                            El monto total a pagar es de  $` +
          subtotal_producto03 +
          `.
                            
                            ¿Desea agregar algún producto más a su carrito?
                
                            `
      );

      if (
        respuesta == "Si" ||
        respuesta == "si" ||
        respuesta == "sI" ||
        respuesta == "SI" ||
        respuesta == "S" ||
        respuesta == "s"
      ) {
        opciones();
      } else {
        resultado();
      }
      break;

      case "4":
        carrito_producto04 = 0;
        orden = prompt(
          `Usted ha elegido la bolsa de alimento para perros de 5Kg
                          
                          En estos momentos quedan: ` +
            stockproducto04 +
            ` unidades disponibles.
                  
                          ¿Cuántas quiere ordenar?
                  
                          `
        );
  
        if (orden >= 1 && orden <= stockproducto04) {
          stockproducto04 = Number(stockproducto04) - Number(orden);
          carrito_producto04 = Number(carrito_producto04) + Number(orden);
          carrito_total =
            Number(carrito_producto04) * Number(producto04) +
            Number(carrito_total);
          subtotal_producto04 = Number(carrito_producto04) * Number(producto04);
          productos_carrito =
            Number(carrito_producto04) + Number(productos_carrito);
        } else {
          orden = 0;
          if (orden > stockproducto04) {
            alert("No hay stock suficiente");
            menu();
          }
        }
  
        respuesta = prompt(
          `Usted a seleccionado ` +
            orden +
            ` bolsa/s de alimento para perros de 5Kg
                              
                              
                              El valor de cada bolsa es de ` +
            producto04 +
            `.
                              El monto total a pagar es de  $` +
            subtotal_producto04 +
            `.
                              
                              ¿Desea agregar algún producto más a su carrito?
                  
                              `
        );
  
        if (
          respuesta == "Si" ||
          respuesta == "si" ||
          respuesta == "sI" ||
          respuesta == "SI" ||
          respuesta == "S" ||
          respuesta == "s"
        ) {
          opciones();
        } else {
          resultado();
        }
        break;
  }
}

function resultado() {
  alert(
    `

    Su carrito contiene: ` +
      productos_carrito +
      ` producto/s.
    El total a pagar es de: $` +
      carrito_total +
      `
    
    Puede también pagarlo en:

    3 cuotas de: ` + (Number(tres_cuotas) * Number(carrito_total)) / 3 + `
    6 cuotas de: ` + (Number(seis_cuotas) * Number(carrito_total)) / 6 + ` 
    12 cuotas de: ` + (Number(doce_cuotas) * Number(carrito_total)) / 12 + `

    Gracias por su visita`
  );
}

respuesta = prompt(`¡Bienvenidos a PET, nuestra tienda online!

¿Desea adquirir alguno de nuestros productos?
Responde "Si" para continuar o "No" para salir
`);

if (
  respuesta == "Si" ||
  respuesta == "si" ||
  respuesta == "sI" ||
  respuesta == "SI" ||
  respuesta == "S" ||
  respuesta == "s"
) {
  orden = 0;
  opciones();
} else {
  orden = 0;
  alert("Gracias por su visita");
}
