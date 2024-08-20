import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../../enum/EDialogPanelClass.enum';
import { DialogBlackComponent } from '../feras/dialog-black/dialog-black.component';
import { DialogDrakeComponent } from '../feras/dialog-drake/dialog-drake.component';
import { DialogJackComponent } from '../feras/dialog-jack/dialog-jack.component';
import { DialogKingComponent } from '../feras/dialog-king/dialog-king.component';
import { DialogPageComponent } from '../feras/dialog-page/dialog-page.component';
import { DialogQueenComponent } from '../feras/dialog-queen/dialog-queen.component';
import { DialogSasakiComponent } from '../feras/dialog-sasaki/dialog-sasaki.component';
import { DialogUltiComponent } from '../feras/dialog-ulti/dialog-ulti.component';
import { DialogWhoComponent } from '../feras/dialog-who/dialog-who.component';

@Component({
  selector: 'app-dialog-kaido',
  standalone: true,
  imports: [],
  templateUrl: './dialog-kaido.component.html',
  styleUrl: '../../../scss/estiloDialog.scss'
})
export class DialogKaidoComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogKing(data: any){
    this.#dialog.open(DialogKingComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogQueen(data: any){
    this.#dialog.open(DialogQueenComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogJack(data: any){
    this.#dialog.open(DialogJackComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBlack(data: any){
    this.#dialog.open(DialogBlackComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogPage(data: any){
    this.#dialog.open(DialogPageComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDrake(data: any){
    this.#dialog.open(DialogDrakeComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSasaki(data: any){
    this.#dialog.open(DialogSasakiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogUlti(data: any){
    this.#dialog.open(DialogUltiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogWho(data: any){
    this.#dialog.open(DialogWhoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
