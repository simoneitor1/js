
// Pelea entre dos personajes
// Goku
// Superman

let energiaMCGregor = 100;
let energiaFloyd = 100;

let round = 0;

const MIN_POWER = 10;
const MAX_POWER = 30;

while (energiaMCGregor > 0 && energiaFloyd > 0) {
  
  round += 1;
  let golpeMCGregor = Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  );
  let golpeFloyd= Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  );

  console.log(
    "--------------------Round " + round + "-----------------------------"
  );
  if (golpeMCGregor === golpeFloyd) {
    console.log("siga siga");
  } else if (golpeMCGregor > golpeFloyd) {
    console.log("MCGregor ataca con una fuerza de " + golpeMCGregor);


    energiaFloyd -= golpeMCGregor;
    if (energiaFloyd < 0) {
      energiaFloyd = 0;
    }
    console.log("la energia de Floyd baja a " + energiaFloyd);
  } else {
    console.log("Floyd ataca con una fuerza de " + golpeFloyd);
    

    
    energiaMCGregor -= golpeFloyd;
    if (energiaMCGregor < 0) {
      energiaMCGregor = 0;
    }
    console.log("la energia de MCGregor  baja a " + energiaMCGregor);
  }
}

console.log("-----------CHAMPION------------");

if (energiaFloyd > 0) {
  console.log("Gano Floyd");
  
} else {
  console.log("Gano MCGregor");
  
}

