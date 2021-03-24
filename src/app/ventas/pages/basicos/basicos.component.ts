import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'ralph';
  nombreUpper: string = 'RALPH';
  nombreCompleto: string = 'raLpH oRtIz';

  fecha: Date = new Date(); // el día de hoy

}
