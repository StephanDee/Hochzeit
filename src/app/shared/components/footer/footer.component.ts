import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DresscodeDialogComponent } from '../../../components/dialogs/dresscode-dialog/dresscode-dialog.component';
import { PrepareDialogComponent } from '../../../components/dialogs/prepare-dialog/prepare-dialog.component';
import { RulesDialogComponent } from '../../../components/dialogs/rules-dialog/rules-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: false,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public items: { title: string }[] = [
    { title: 'Vorbereitung' },
    { title: 'Dresscode' },
    { title: 'Hausregeln' },
  ];

  constructor(protected matDialog: MatDialog) { }

  ngOnInit(): void { }

  onClick(event: string): void {
    let config: MatDialogConfig = { autoFocus: false, data: event, width: '400px' }
    switch (event) {
      case this.items[0].title: {
        this.matDialog.open(PrepareDialogComponent, config);
        break;
      }
      case this.items[1].title: {
        this.matDialog.open(DresscodeDialogComponent, config);
        break;
      }
      case this.items[2].title: {
        this.matDialog.open(RulesDialogComponent, config);
        break;
      }
      default:
        console.warn('Something went wrong');
    }
  }
}
