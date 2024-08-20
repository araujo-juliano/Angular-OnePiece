import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogAkainuComponent } from '../dialog/almirantes/dialog-akainu/dialog-akainu.component';
import { DialogAokijiComponent } from '../dialog/almirantes/dialog-aokiji/dialog-aokiji.component';
import { DialogFujitoraComponent } from '../dialog/almirantes/dialog-fujitora/dialog-fujitora.component';
import { DialogKizaruComponent } from '../dialog/almirantes/dialog-kizaru/dialog-kizaru.component';
import { DialogSengokuComponent } from '../dialog/almirantes/dialog-sengoku/dialog-sengoku.component';
import { DialogTouroComponent } from '../dialog/almirantes/dialog-touro/dialog-touro.component';

@Component({
  selector: 'app-almirantes',
  standalone: true,
  imports: [],
  templateUrl: './almirantes.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class AlmirantesComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogAkainu(data: any){
    this.#dialog.open(DialogAkainuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogAokiji(data: any){
    this.#dialog.open(DialogAokijiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogFujitora(data: any){
    this.#dialog.open(DialogFujitoraComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogKizaru(data: any){
    this.#dialog.open(DialogKizaruComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSengoku(data: any){
    this.#dialog.open(DialogSengokuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogTouro(data: any){
    this.#dialog.open(DialogTouroComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
