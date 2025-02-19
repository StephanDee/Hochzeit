import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';

class ChipsSelection {
  constructor(public selected: boolean, public selection: string) {
    this.selected = selected;
    this.selection = selection;
  }
}

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  standalone: false,
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {
  public tab1: string = 'Zusagen / Absagen';
  public tab2: string = 'Ablauf';
  public tab3: string = 'Location';
  protected formGroup: FormGroup;
  protected subjectFormControl: FormControl;
  protected messageFormControl: FormControl;
  protected nameFormControl: FormControl;
  readonly messageSelection: ChipsSelection[] = [new ChipsSelection(true, 'Zusagen'), new ChipsSelection(false, 'Absagen'), new ChipsSelection(false, 'Sonstiges')];

  constructor() { }

  ngOnInit() {
    this.nameFormControl = new FormControl('', [Validators.required]);
    this.subjectFormControl = new FormControl('Zusage', [Validators.required]);
    this.messageFormControl = new FormControl('Sehr gerne sage ich zu!', [Validators.required]);

    this.formGroup = new FormGroup({
      nameFormControl: this.nameFormControl,
      subjectFormControl: this.subjectFormControl,
      messageFormControl: this.messageFormControl
    });
  }

  onSelectionChange(event: MatChipSelectionChange): void {
    let selectedChipLabel: string = event.source['_textElement']?.innerText;

    if (selectedChipLabel?.match('Zusagen') && event.selected) {
      this.subjectFormControl.patchValue('Zusage');
      this.messageFormControl.patchValue('Sehr gerne sage ich zu!');
    } else if (selectedChipLabel?.match('Absagen') && event.selected) {
      this.subjectFormControl.patchValue('Absage');
      this.messageFormControl.patchValue('Ich muss leider absagen, weil...');
    } else if (selectedChipLabel?.match('Sonstiges') && event.selected) {
      this.subjectFormControl.patchValue('Sonstiges');
      this.messageFormControl.patchValue('');
    } else {
      this.subjectFormControl.patchValue('');
      this.messageFormControl.patchValue('');
    }
  }

  isFormGroupValid(status: string): boolean {
    return status === 'VALID';
  }
}