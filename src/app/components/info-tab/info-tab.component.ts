import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { EventType } from '../../shared/enums/EventType';
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
  @ViewChild(MatTabGroup) protected matTabGroup: MatTabGroup;
  @ViewChild(MatTab) protected MatTabs: MatTab[];

  @Input() public selectedIndex: number = 0;
  public swipeCoord: Touch;
  public swipeTime: any;
  public tab1: string = 'Zusage / Absage';
  public tab2: string = 'Location';
  public tab3: string = 'Parken';
  protected formGroup: FormGroup;
  public Test: any = 'assadasdasdsasdasdasdaddasd';
  protected readonly messageSelection: ChipsSelection[] = [new ChipsSelection(true, 'Zusagen'), new ChipsSelection(false, 'Absagen'), new ChipsSelection(false, 'Sonstiges')];

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      names: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      count: new FormControl(1, [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(5)]),
      subject: new FormControl('Zusage', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      message: new FormControl('Sehr gerne sage ich zur Hochzeit zu!\n\nLiebe Grüße,\n', [Validators.required, Validators.minLength(10), Validators.maxLength(500)])
    });
  }

  onSelectionChange(event: MatChipSelectionChange, formGroup: FormGroup): void {
    let selectedChipLabel: string = event.source['_textElement']?.innerText;

    if (!isNil(selectedChipLabel)) {
      if (selectedChipLabel?.match('Zusagen') && event.selected) {
        formGroup.controls['subject'].patchValue('Zusage');
        formGroup.controls['message'].patchValue('Sehr gerne sage ich zur Hochzeit zu!\n\nLiebe Grüße,\n');
      } else if (selectedChipLabel?.match('Absagen') && event.selected) {
        formGroup.controls['subject'].patchValue('Absage');
        formGroup.controls['message'].patchValue('Ich muss leider zur Hochzeit absagen, weil...\n\nLiebe Grüße,\n');
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
    window.location.href = `mailto:duenkel.stephan@gmail.com;yongyong@gmail.com?subject=${encodedSubject}&body=${encodedTitleNames + encodedNames + encodedTitleCount + encodedCount + encodedMessage}`;
  }

  onSwipe(event: TouchEvent, swipeCoord: Touch, swipeTime: any): void {
    const time: any = new Date().getTime();

    if (event.type === EventType.ActionTouch.TOUCHSTART) {
      this.swipeCoord = event.changedTouches[0];
      this.swipeTime = time;
    } else if (event.type === EventType.ActionTouch.TOUCHEND) {
      const direction: number[] = [event.changedTouches[0].clientX - swipeCoord.clientX, event.changedTouches[0].clientY - swipeCoord.clientY];
      const duration: number = time - swipeTime;
      const longEnough: boolean = Math.abs(direction[0]) > 40;
      const horizontalEnough: boolean = Math.abs(direction[0]) > Math.abs(direction[1] * 3);

      if (duration < 1000 && longEnough && horizontalEnough) {
        const swipeDirection: string = direction[0] < 0 ? EventType.ActionSwipe.SWIPERIGHT : EventType.ActionSwipe.SWIPELEFT;

        if (swipeDirection.match(EventType.ActionSwipe.SWIPERIGHT)) {
          const isFirst: boolean = this.selectedIndex === 0;

          if (this.selectedIndex <= 1) {
            this.selectedIndex = isFirst ? 1 : this.selectedIndex + 1;
          }

        } else if (swipeDirection.match(EventType.ActionSwipe.SWIPELEFT)) {
          const isLastIndex: boolean = this.selectedIndex >= 1;

          if (isLastIndex) {
            this.selectedIndex = this.selectedIndex - 1;
          }
        }
      }
    }
  }
}