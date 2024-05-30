import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../../enum/EDialogPanelClass.enum';
import { DialogBeckmanComponent } from '../ruivo/dialog-beckman/dialog-beckman.component';
import { DialogLuckyComponent } from '../ruivo/dialog-lucky/dialog-lucky.component';
import { DialogYasoppComponent } from '../ruivo/dialog-yasopp/dialog-yasopp.component';

@Component({
  selector: 'app-dialog-shanks',
  standalone: true,
  imports: [],
  templateUrl: './dialog-shanks.component.html',
  styleUrl: '../../../scss/estiloDialog.scss'
})
export class DialogShanksComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogBeckman(data: any){
    this.#dialog.open(DialogBeckmanComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogLucky(data: any){
    this.#dialog.open(DialogLuckyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogYasopp(data: any){
    this.#dialog.open(DialogYasoppComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
