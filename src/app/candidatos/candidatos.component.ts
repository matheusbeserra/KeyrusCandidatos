import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../candidatos.service';

@Component ({
    selector: 'candidatos',
    templateUrl: './candidatos.component.html'
})
export class CandidatosComponent implements OnInit {

    candidatos;
    text;
    textoAtual;
    appState = 'default';
    
  constructor(private CandidatosService: CandidatosService) { }

  ngOnInit() {
    this.candidatos = this.CandidatosService.getCandidatos();
  }

  addCandidato() {
    let newcandidato = {
      text: this.text
    }
    this.candidatos.push(newcandidato);

    this.CandidatosService.addCandidatos(newcandidato);
  }
  
  deleteCandidato(candidatoText) {
    for(let i = 0; i < this.candidatos.length; i++) {
      if(this.candidatos[i].text == candidatoText) {
          this.candidatos.splice(i, 1);
      }
    }

    this.CandidatosService.deleteCandidatos(candidatoText);
  }

  editCandidato(candidato) {
    this.appState = 'edit';
    this.textoAtual = candidato.text;
    this.text = candidato.text;
  }

  updateCandidato() {
    console.log(this.text);
        for(let i = 0; i < this.candidatos.length; i++) {
          if(this.candidatos[i].text == this.textoAtual) {
          this.candidatos[i].text = this.text;
      }
  }

  this.CandidatosService.updateCandidatos(this.textoAtual, this.text);
  }
}