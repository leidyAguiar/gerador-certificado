import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from '../item-certificado/item-certificado.component';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent {}
