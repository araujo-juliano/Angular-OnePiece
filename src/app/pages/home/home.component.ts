import { Component } from '@angular/core';
//Componentes
import { HeaderComponent } from '../../components/header/header.component';
import { ChapeusComponent } from '../../components/chapeus/chapeus.component';
import { YonkousComponent } from '../../components/yonkous/yonkous.component';
import { ShishibukaisComponent } from '../../components/shishibukais/shishibukais.component';
import { PiorGeracaoComponent } from '../../components/pior-geracao/pior-geracao.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ChapeusComponent, YonkousComponent, ShishibukaisComponent, PiorGeracaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
