import { Component } from '@angular/core';
//Componentes
import { HeaderComponent } from '../../components/header/header.component';
import { ChapeusComponent } from '../../components/chapeus/chapeus.component';
import { YonkousComponent } from '../../components/yonkous/yonkous.component';
import { ShishibukaisComponent } from '../../components/shishibukais/shishibukais.component';
import { AlmirantesComponent } from "../../components/almirantes/almirantes.component";
import { GovernoComponent } from "../../components/governo/governo.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { RevolucionariosComponent } from "../../components/revolucionarios/revolucionarios.component";
import { MarinhaComponent } from "../../components/marinha/marinha.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ChapeusComponent, YonkousComponent, ShishibukaisComponent, AlmirantesComponent, GovernoComponent, FooterComponent, RevolucionariosComponent, MarinhaComponent]
})
export class HomeComponent {

}
