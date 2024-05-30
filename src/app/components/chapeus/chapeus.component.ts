import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogLuffyComponent } from '../dialog/chapeus/dialog-luffy/dialog-luffy.component';
import { DialogZoroComponent } from '../dialog/chapeus/dialog-zoro/dialog-zoro.component';
import { DialogNamiComponent } from '../dialog/chapeus/dialog-nami/dialog-nami.component';
import { DialogUsoppComponent } from '../dialog/chapeus/dialog-usopp/dialog-usopp.component';
import { DialogSanjiComponent } from '../dialog/chapeus/dialog-sanji/dialog-sanji.component';
import { DialogChopperComponent } from '../dialog/chapeus/dialog-chopper/dialog-chopper.component';
import { DialogRobinComponent } from '../dialog/chapeus/dialog-robin/dialog-robin.component';
import { DialogFrankyComponent } from '../dialog/chapeus/dialog-franky/dialog-franky.component';
import { DialogBrookComponent } from '../dialog/chapeus/dialog-brook/dialog-brook.component';
import { DialogJinbeComponent } from '../dialog/chapeus/dialog-jinbe/dialog-jinbe.component';


@Component({
  selector: 'app-chapeus',
  standalone: true,
  imports: [],
  templateUrl: './chapeus.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class ChapeusComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogLuffy(data: any){
    this.#dialog.open(DialogLuffyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogZoro(data: any){
    this.#dialog.open(DialogZoroComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogNami(data: any){
    this.#dialog.open(DialogNamiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogUsopp(data: any){
    this.#dialog.open(DialogUsoppComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSanji(data: any){
    this.#dialog.open(DialogSanjiComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogChopper(data: any){
    this.#dialog.open(DialogChopperComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogRobin(data: any){
    this.#dialog.open(DialogRobinComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogFranky(data: any){
    this.#dialog.open(DialogFrankyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBrook(data: any){
    this.#dialog.open(DialogBrookComponent, {
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
}

