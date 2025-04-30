import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let pronombres = ["the", "our"];
let adj = ["great", "big"];
let sustantivos = ["jogger", "racoon","testes","invictus"];
let domin =['com','es','io','us'];

pronombres.forEach(pronom => {
  adj.forEach(adjetivos => {
    sustantivos.forEach(sustantivos => {
      domin.forEach(dominio=>{      
        let nombreDominio = `${pronom}${adjetivos}${sustantivos}`;

        // Si el sustantivo termina con el Dominio
        if (sustantivos.endsWith(dominio)) {
            const nuevoSustantivo = sustantivos.slice(0, -dominio.length);
            nombreDominio = `${pronom}${adjetivos}${nuevoSustantivo}`;
        }
        console.log(`${nombreDominio}.${dominio}`);
      })
    })
  })

});
