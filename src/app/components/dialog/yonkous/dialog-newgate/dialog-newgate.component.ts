import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAceComponent } from '../barba-branca/dialog-ace/dialog-ace.component';
import { EDialogPanelClass } from '../../../../enum/EDialogPanelClass.enum';
import { DialogJozuComponent } from '../barba-branca/dialog-jozu/dialog-jozu.component';
import { DialogMarcoComponent } from '../barba-branca/dialog-marco/dialog-marco.component';
import { DialogVistaComponent } from '../barba-branca/dialog-vista/dialog-vista.component';

@Component({
  selector: 'app-dialog-newgate',
  standalone: true,
  imports: [],
  templateUrl: './dialog-newgate.component.html',
  styleUrl: '../../../scss/estiloDialog.scss'
})
export class DialogNewgateComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogAce(data: any){
    this.#dialog.open(DialogAceComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogJozu(data: any){
    this.#dialog.open(DialogJozuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMarco(data: any){
    this.#dialog.open(DialogMarcoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogVista(data: any){
    this.#dialog.open(DialogVistaComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }



}
