import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogImuComponent } from '../dialog/gorousei/dialog-imu/dialog-imu.component';
import { DialogJupeterComponent } from '../dialog/gorousei/dialog-jupeter/dialog-jupeter.component';
import { DialogMarsComponent } from '../dialog/gorousei/dialog-mars/dialog-mars.component';
import { DialogNusjuroComponent } from '../dialog/gorousei/dialog-nusjuro/dialog-nusjuro.component';
import { DialogSaturnComponent } from '../dialog/gorousei/dialog-saturn/dialog-saturn.component';
import { DialogWarcuryComponent } from '../dialog/gorousei/dialog-warcury/dialog-warcury.component';

@Component({
  selector: 'app-governo',
  standalone: true,
  imports: [],
  templateUrl: './governo.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class GovernoComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogImu(data: any){
    this.#dialog.open(DialogImuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogJupeter(data: any){
    this.#dialog.open(DialogJupeterComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMars(data: any){
    this.#dialog.open(DialogMarsComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogNusjuro(data: any){
    this.#dialog.open(DialogNusjuroComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSaturn(data: any){
    this.#dialog.open(DialogSaturnComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogWarcury(data: any){
    this.#dialog.open(DialogWarcuryComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
