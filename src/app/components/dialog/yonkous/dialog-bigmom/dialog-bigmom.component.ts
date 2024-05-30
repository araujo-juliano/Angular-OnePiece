import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../../enum/EDialogPanelClass.enum';
import { DialogCrackerComponent } from '../bigMom/dialog-cracker/dialog-cracker.component';
import { DialogDaifukuComponent } from '../bigMom/dialog-daifuku/dialog-daifuku.component';
import { DialogKatakuriComponent } from '../bigMom/dialog-katakuri/dialog-katakuri.component';
import { DialogOvenComponent } from '../bigMom/dialog-oven/dialog-oven.component';
import { DialogPerosperoComponent } from '../bigMom/dialog-perospero/dialog-perospero.component';
import { DialogSmoothieComponent } from '../bigMom/dialog-smoothie/dialog-smoothie.component';

@Component({
  selector: 'app-dialog-bigmom',
  standalone: true,
  imports: [],
  templateUrl: './dialog-bigmom.component.html',
  styleUrl: '../../../scss/estiloDialog.scss'
})
export class DialogBigmomComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogKatakuri(data: any){
    this.#dialog.open(DialogKatakuriComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogPerospero(data: any){
    this.#dialog.open(DialogPerosperoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSmoothie(data: any){
    this.#dialog.open(DialogSmoothieComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogCracker(data: any){
    this.#dialog.open(DialogCrackerComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogOven(data: any){
    this.#dialog.open(DialogOvenComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDaifuku(data: any){
    this.#dialog.open(DialogDaifukuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
