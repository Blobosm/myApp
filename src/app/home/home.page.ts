import { Component } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mensaje: string = "";
  public entrada = {
    numero1: 0,
    numero2: 0
  };

  constructor(private service: TestService) {}

  doSumar(){
    this.mensaje= "La suma es: " + 
      this.service.sumar(
        Number(this.entrada.numero1),
        Number(this.entrada.numero2));
  }

}
