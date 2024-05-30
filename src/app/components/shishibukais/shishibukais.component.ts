import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogJinbeComponent } from '../dialog/shishibukais/dialog-jinbe/dialog-jinbe.component';
import { DialogCrocodileComponent } from '../dialog/shishibukais/dialog-crocodile/dialog-crocodile.component';
import { DialogDoflamingoComponent } from '../dialog/shishibukais/dialog-doflamingo/dialog-doflamingo.component';
import { DialogHancockComponent } from '../dialog/shishibukais/dialog-hancock/dialog-hancock.component';
import { DialogKumaComponent } from '../dialog/shishibukais/dialog-kuma/dialog-kuma.component';
import { DialogMihawkComponent } from '../dialog/shishibukais/dialog-mihawk/dialog-mihawk.component';
import { DialogMoriaComponent } from '../dialog/shishibukais/dialog-moria/dialog-moria.component';

@Component({
  selector: 'app-shishibukais',
  standalone: true,
  imports: [],
  templateUrl: './shishibukais.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class ShishibukaisComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogCrocodile(data: any){
    this.#dialog.open(DialogCrocodileComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDoflamingo(data: any){
    this.#dialog.open(DialogDoflamingoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogHancock(data: any){
    this.#dialog.open(DialogHancockComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogJinbe(data: any){
    this.#dialog.open(DialogJinbeComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogKuma(data: any){
    this.#dialog.open(DialogKumaComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMihawk(data: any){
    this.#dialog.open(DialogMihawkComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMoria(data: any){
    this.#dialog.open(DialogMoriaComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }

}
