import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

export class CountdownDate {
  constructor(public days: number, public hours: number, public minutes: number, public seconds: number) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: false,
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() public title: string = 'Title';
  @Input() public date: string = new Date().toString();
  protected countdown: CountdownDate = new CountdownDate(0, 0, 0, 0);
  protected subscription: Subscription = new Subscription();
  public test: string = 'asd';

  constructor() {
    // test
  }

  ngOnInit(): void {
    this.subscription.add(this.countdownTimer(this.date).subscribe((countdownDate: CountdownDate) => {
      this.countdown = countdownDate;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Countdown Timer until end Date.
   *
   * @param date end date: '08/02/2025 5:00 PM'
   * @param id HtmlElement id
   */
  countdownTimer(endDate: string): Observable<CountdownDate> {
    let end: Date = new Date(endDate);
    let second: number = 1000;
    let minute: number = second * 60;
    let hour: number = minute * 60;
    let day: number = hour * 24;
    let subject: Subject<CountdownDate> = new Subject();

    let timer: NodeJS.Timeout = setInterval(() => subject.next(this.showRemaining(end, second, minute, hour, day, timer)), 1000);
    return subject;
  }

  protected showRemaining(end: any, second: number, minute: number, hour: number, day: number, timer: NodeJS.Timeout): CountdownDate {
    let now: any = new Date();
    let distance: any = end - now;
    if (distance < 0) {
      clearInterval(timer);

      return new CountdownDate(0, 0, 0, 0);
    }
    let days: number = Math.floor(distance / day);
    let hours: number = Math.floor((distance % day) / hour);
    let minutes: number = Math.floor((distance % hour) / minute);
    let seconds: number = Math.floor((distance % minute) / second);

    return new CountdownDate(days, hours, minutes, seconds);
  }

}
