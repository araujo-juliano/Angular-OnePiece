import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogBettyComponent } from '../dialog/revolucionarios/dialog-betty/dialog-betty.component';
import { DialogDragonComponent } from '../dialog/revolucionarios/dialog-dragon/dialog-dragon.component';
import { DialogIvankovComponent } from '../dialog/revolucionarios/dialog-ivankov/dialog-ivankov.component';
import { DialogKarasuComponent } from '../dialog/revolucionarios/dialog-karasu/dialog-karasu.component';
import { DialogLindberghComponent } from '../dialog/revolucionarios/dialog-lindbergh/dialog-lindbergh.component';
import { DialogMorleyComponent } from '../dialog/revolucionarios/dialog-morley/dialog-morley.component';
import { DialogSaboComponent } from '../dialog/revolucionarios/dialog-sabo/dialog-sabo.component';

@Component({
  selector: 'app-revolucionarios',
  standalone: true,
  imports: [],
  templateUrl: './revolucionarios.component.html',
  styleUrl: '../scss/estiloGeral.scss'
})
export class RevolucionariosComponent {
  #dialog = inject(MatDialog)

  public arrayCards = signal<any>([
    {
      photoCover: '',
      title: ''
    },
  ])

  public openDialogDragon(data: any){
    this.#dialog.open(DialogDragonComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogSabo(data: any){
    this.#dialog.open(DialogSaboComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogIvankov(data: any){
    this.#dialog.open(DialogIvankovComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogBetty(data: any){
    this.#dialog.open(DialogBettyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogKarasu(data: any){
    this.#dialog.open(DialogKarasuComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogLindbergh(data: any){
    this.#dialog.open(DialogLindberghComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
  public openDialogMorley(data: any){
    this.#dialog.open(DialogMorleyComponent, {
      data,
      panelClass: EDialogPanelClass.CARDS
    })
  }
}
