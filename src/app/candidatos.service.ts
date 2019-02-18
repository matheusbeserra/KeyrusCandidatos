import { Injectable } from '@angular/core';
import { Init } from './init-candidatos';

@Injectable()
export class CandidatosService extends Init {

  constructor() {
    super();
    this.load();
   }

   getCandidatos() {
     let candidatos = JSON.parse(localStorage.getItem('candidatos'));
     return candidatos;
   }

   addCandidatos(newCandidato) {
      let candidatos = JSON.parse(localStorage.getItem('candidatos'));

      candidatos.push(newCandidato);

      localStorage.setItem('candidatos', JSON.stringify(candidatos));
   }

   deleteCandidatos(candidatoText) {
     let candidatos = JSON.parse(localStorage.getItem('candidatos'));

     for(let i = 0; i <candidatos.length; i++) {
      if(candidatos[i].text == candidatoText) {
        candidatos.splice(i, 1);
      }
   }
      
      localStorage.setItem('candidatos', JSON.stringify(candidatos));
   }

     updateCandidatos(textoAtual, textoNovo){  
         
    let candidatos = JSON.parse(localStorage.getItem('candidatos'));

     for(let i = 0; i <candidatos.length; i++) {
      if(candidatos[i].text == textoAtual) {
        candidatos[i].text = textoNovo;
      }
   }
      localStorage.setItem('candidatos', JSON.stringify(candidatos));
   }
}