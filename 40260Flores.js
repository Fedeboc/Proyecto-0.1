function cryptos( precio, nombre){
    this.precio = precio;
    this.nombre = nombre;
  } 
  const BTC = new cryptos (19.839, "Bitcoin");
  const ETH = new cryptos ( 1.556, "Etherium");
  const BNB = new cryptos ( 295, "Etherium");
  const SOL = new cryptos ( 35.81, "Etherium");
    
let mensaje = "Bienvenido a Swap";
    alert(mensaje); 


let entrada = prompt("Seleccione su Crypto (Lista de Crypto(x) o Descuento de cliente(%)).").toUpperCase();

while(entrada != "ESC" ){
   switch (entrada) {
         case "ETH":
           let cantidad = Number(prompt("ingresa la cantidad de dolares"));
           let resultado = ETH.precio / cantidad;
           alert(resultado);
           break;

         case "BTC":
           let cantidad2 =  Number(prompt("ingresa la cantidad de dolares"));
           let resultado2 = BTC.precio / cantidad2;
           alert(resultado2);
           break;

         case "BNB":
           let cantidad5 = Number(prompt("ingresa la cantidad de dolares"));
           let resultado5 = BNB.precio / cantidad5;
           alert(resultado5);
           break;

         case "SOL":
           let cantidad6 =  Number(prompt("ingresa la cantidad de dolares"));
           let resultado6 = SOL.precio / cantidad6;
           alert(resultado6);
           break;

         case "%":
            const Clientes = [
              { id: 1, nombre: "JUAN", Saldo: 1000 },
              { id: 2, nombre: "ALEJANDRA", Saldo: 700 },
              { id: 3, nombre: "MIGUEL", Saldo: 1250 },
              { id: 4, nombre: "FEDERICO", Saldo: 2000 },
            ];
            let nombreDeUsuario = prompt("Nombre de Usuario").toUpperCase();
            if(Clientes.some((el) => el.nombre == nombreDeUsuario)){
              alert("Usted tiene un descuento del 50% en comisiones.");
            }else{
              alert("Tiene que estar registrado para obtener un descuento.");
            }

         case "X":
            const nombres = ["BTC", "ETH", "BNB", "SOL"];

            for(let index = 0; index < nombres.length; index++){
            alert(nombres[index]);
            }

           default:
           alert("Lo sentimos... aun no tenemos todas las cryptos. :[")
           break;
   }
entrada = prompt(" ¿Quieres hacer otra convercion ETH/BTC? ESC/Salir").toUpperCase();
}

alert("Gracias!!!.. Vuelva pronto."); 



