import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent {}
