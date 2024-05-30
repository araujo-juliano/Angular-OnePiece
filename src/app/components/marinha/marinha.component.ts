import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogDalmatianComponent } from '../dialog/marinha/dialog-dalmatian/dialog-dalmatian.component';
import { DialogDobermanComponent } from '../dialog/marinha/dialog-doberman/dialog-doberman.component';
import { DialogGarpComponent } from '../dialog/marinha/dialog-garp/dialog-garp.component';
import { DialogGiantComponent } from '../dialog/marinha/dialog-giant/dialog-giant.component';
import { DialogMomongaComponent } from '../dialog/marinha/dialog-momonga/dialog-momonga.component';
import { DialogOnigumoComponent } from '../dialog/marinha/dialog-onigumo/dialog-onigumo.component';
import { DialogSmokerComponent } from '../dialog/marinha/dialog-smoker/dialog-smoker.component';
import { DialogStrawberriComponent } from '../dialog/marinha/dialog-strawberri/dialog-strawberri.component';
import { DialogTsuruComponent } from '../dialog/marinha/dialog-tsuru/dialog-tsuru.component';
import { DialogYamakajiComponent } from '../dialog/marinha/dialog-yamakaji/dialog-yamakaji.component';

@Component({
  selector: 'app-marinha',
  standalone: true,
  imports: [],
  templateUrl: './marinha.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class MarinhaComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogDalmatian(data: any){
    this.#dialog.open(DialogDalmatianComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogDoberman(data: any){
    this.#dialog.open(DialogDobermanComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogGarp(data: any){
    this.#dialog.open(DialogGarpComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogGiant(data: any){
    this.#dialog.open(DialogGiantComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMomonga(data: any){
    this.#dialog.open(DialogMomongaComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogOnigumo(data: any){
    this.#dialog.open(DialogOnigumoComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSmoker(data: any){
    this.#dialog.open(DialogSmokerComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogStrawberri(data: any){
    this.#dialog.open(DialogStrawberriComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogTsuru(data: any){
    this.#dialog.open(DialogTsuruComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogYamakaji(data: any){
    this.#dialog.open(DialogYamakajiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}

