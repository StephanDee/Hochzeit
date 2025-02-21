import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { isNil } from 'lodash-es';

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
  readonly messageSelection: ChipsSelection[] = [new ChipsSelection(true, 'Zusagen'), new ChipsSelection(false, 'Absagen'), new ChipsSelection(false, 'Sonstiges')];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      names: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      count: new FormControl(1, [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(5)]),
      subject: new FormControl('Zusage', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      message: new FormControl('Sehr gerne sage ich zu!\n\nLiebe Grüße,\n', [Validators.required, Validators.minLength(10), Validators.maxLength(500)])
    });
  }

  onSelectionChange(event: MatChipSelectionChange, formGroup: FormGroup): void {
    let selectedChipLabel: string = event.source['_textElement']?.innerText;

    if (!isNil(selectedChipLabel)) {
      console.log(selectedChipLabel);
      if (selectedChipLabel?.match('Zusagen') && event.selected) {
        formGroup.controls['subject'].patchValue('Zusage');
        formGroup.controls['message'].patchValue('Sehr gerne sage ich zu!\n\nLiebe Grüße,\n');
      } else if (selectedChipLabel?.match('Absagen') && event.selected) {
        formGroup.controls['subject'].patchValue('Absage');
        formGroup.controls['message'].patchValue('Ich muss leider absagen, weil...\n\nLiebe Grüße,\n');
      } else if (selectedChipLabel?.match('Sonstiges') && event.selected) {
        formGroup.controls['subject'].patchValue('Sonstiges');
        formGroup.controls['message'].patchValue('');
      } else {
        formGroup.controls['subject'].patchValue('');
        formGroup.controls['message'].patchValue('');
      }
    }
  }

  isFormGroupValid(status: string): boolean {
    return status === 'VALID';
  }

  sendEmail(formGroup: FormGroup): void {
    const encodedTitleNames = encodeURI('Vor und Nachnamen aller Personen:\n');
    const encodedTitleCount = encodeURI('Personen Anzahl:\n');
    const encodedNames = encodeURI(formGroup.controls['names'].value + '\n\n');
    const encodedCount = encodeURI(formGroup.controls['count'].value + '\n\n');
    const encodedSubject = encodeURI(formGroup.controls['subject'].value);
    const encodedMessage = encodeURI(formGroup.controls['message'].value);
    window.location.href = `mailto:duenkel.stephan@gmail.com?subject=${encodedSubject}&body=${encodedTitleNames + encodedNames + encodedTitleCount + encodedCount + encodedMessage}`;
  }
}