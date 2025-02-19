import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor() { }

  /**
   * Countdown Timer until end Date.
   *
   * @param date end date: '08/02/2025 5:00 PM'
   * @param id HtmlElement id
   */
  public countdownTimer(endDate: string, id: string): void {
    let end: any = new Date(endDate);
    let second: any = 1000;
    let minute: any = second * 60;
    let hour: any = minute * 60;
    let day: any = hour * 24;
    let timer: any;

    timer = setInterval(() => this.showRemaining(id, end, second, minute, hour, day, timer), 1000);
  }

  protected showRemaining(id: string, end: any, second: any, minute: any, hour: any, day: any, timer: any): void {
    let now: any = new Date();
    let distance: any = end - now;
    let element: any = document.getElementById(id);
    if (distance < 0) {

      clearInterval(timer);
      if (element) {
        element.innerHTML = 'Die Party ist im vollen Gange!';
      }

      return;
    }
    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    if (element) {
      element.innerHTML = days + ' Tage ';
      element.innerHTML += hours + ' Stunden ';
      element.innerHTML += minutes + ' Minuten ';
      element.innerHTML += seconds + ' Sekunden';
    }
  }
}
