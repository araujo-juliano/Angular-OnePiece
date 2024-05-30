import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogShanksComponent } from '../dialog/yonkous/dialog-shanks/dialog-shanks.component';
import { DialogNewgateComponent } from '../dialog/yonkous/dialog-newgate/dialog-newgate.component';
import { DialogKaidoComponent } from '../dialog/yonkous/dialog-kaido/dialog-kaido.component';
import { DialogBigmomComponent } from '../dialog/yonkous/dialog-bigmom/dialog-bigmom.component';
import { DialogBuggyComponent } from '../dialog/yonkous/dialog-buggy/dialog-buggy.component';
import { DialogLuffyYonkouComponent } from '../dialog/yonkous/dialog-luffy-yonkou/dialog-luffy-yonkou.component';
import { DialogTeachComponent } from '../dialog/yonkous/dialog-teach/dialog-teach.component';
import { DialogShanks1Component } from '../dialog/yonkous/dialog-shanks1/dialog-shanks1.component';

@Component({
  selector: 'app-yonkous',
  standalone: true,
  imports: [],
  templateUrl: './yonkous.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class YonkousComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogShanks(data: any){
    this.#dialog.open(DialogShanksComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogShanks1(data: any){
    this.#dialog.open(DialogShanks1Component, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogNewgate(data: any){
    this.#dialog.open(DialogNewgateComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogKaido(data: any){
    this.#dialog.open(DialogKaidoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBigmom(data: any){
    this.#dialog.open(DialogBigmomComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBuggy(data: any){
    this.#dialog.open(DialogBuggyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogLuffyYonkou(data: any){
    this.#dialog.open(DialogLuffyYonkouComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogTeach(data: any){
    this.#dialog.open(DialogTeachComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }

}
