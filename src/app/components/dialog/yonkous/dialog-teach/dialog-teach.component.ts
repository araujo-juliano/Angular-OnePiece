import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../../enum/EDialogPanelClass.enum';
import { DialogAugurComponent } from '../barba-negra/dialog-augur/dialog-augur.component';
import { DialogBurgessComponent } from '../barba-negra/dialog-burgess/dialog-burgess.component';
import { DialogDevonComponent } from '../barba-negra/dialog-devon/dialog-devon.component';
import { DialogDocqComponent } from '../barba-negra/dialog-docq/dialog-docq.component';
import { DialogLafitteComponent } from '../barba-negra/dialog-lafitte/dialog-lafitte.component';
import { DialogShiliewComponent } from '../barba-negra/dialog-shiliew/dialog-shiliew.component';
import { DialogShotComponent } from '../barba-negra/dialog-shot/dialog-shot.component';
import { DialogWolfComponent } from '../barba-negra/dialog-wolf/dialog-wolf.component';
import { DialogKuzanComponent } from '../barba-negra/dialog-kuzan/dialog-kuzan.component';
import { DialogPizarroComponent } from '../barba-negra/dialog-pizarro/dialog-pizarro.component';

@Component({
  selector: 'app-dialog-teach',
  standalone: true,
  imports: [],
  templateUrl: './dialog-teach.component.html',
  styleUrl: '../../../scss/estiloDialog.scss'
})
export class DialogTeachComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogAugur(data: any){
    this.#dialog.open(DialogAugurComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBurgess(data: any){
    this.#dialog.open(DialogBurgessComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDevon(data: any){
    this.#dialog.open(DialogDevonComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDocQ(data: any){
    this.#dialog.open(DialogDocqComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogLafitte(data: any){
    this.#dialog.open(DialogLafitteComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogPizarro(data: any){
    this.#dialog.open(DialogPizarroComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogShiliew(data: any){
    this.#dialog.open(DialogShiliewComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogShot(data: any){
    this.#dialog.open(DialogShotComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogWolf(data: any){
    this.#dialog.open(DialogWolfComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogKuzan(data: any){
    this.#dialog.open(DialogKuzanComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
