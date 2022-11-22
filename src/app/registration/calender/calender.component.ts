import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  Registration = 'Registration';
  tournamentStartMinDate: Date | undefined;
  tournamentStartMaxDate: Date | undefined;
  tournamentEndtMinDate: Date | undefined;
  tournamentEndtMaxDate: Date | undefined;

  registrationStartMaxDate: Date | undefined;
  registrationStartMinDate: Date | undefined;
  registrationEndMinDate: Date | undefined;
  registrationEndMaxDate: Date | undefined;

  // initilise form value
  tEndDate: any;
  tStartDate: any;
  rEndDate: any;
  rStartDate: any;
  constructor() {
    this.tournamentStartMinDate = new Date();
    this.tournamentEndtMinDate = new Date();
    this.registrationEndMinDate = new Date();
    this.registrationStartMinDate = new Date();
  }

  ngOnInit(): void {
    // cVALUE CHEHCKED

    this.getFormData();
  }

  onTournamentStart(event: any) {
    console.log('functin wird', event);

    this.tournamentEndtMinDate = event.value;
    this.registrationStartMaxDate = event.value;
  }
  onTournamentEnd(event: any) {
    console.log('functin wir2d', event);
    this.registrationEndMaxDate = event.value;
  }

  onRegisterationStart(event: any) {
    this.registrationEndMinDate = event.value;
  }

  // form submit
  onSave(data: any) {
    localStorage.setItem('formData', JSON.stringify(data.value));

    this.tStartDate = null;
    this.tEndDate = null;
    this.rEndDate = null;
    this.rStartDate = null;
    this.Registration = 'Registration';
  }

  // get initial data
  getFormData() {
    if (localStorage.getItem('formData')) {
      let data: any = localStorage.getItem('formData');
      let res = JSON.parse(data);

      this.tStartDate = res.tStartDate;
      this.tEndDate = res.tEndDate;
      this.rEndDate = res.rEndDate;
      this.rStartDate = res.rStartDate;
      this.Registration = 'User Data';
    } else {
      this.tStartDate = null;
      this.tEndDate = null;
      this.rEndDate = null;
      this.rStartDate = null;
      this.Registration = 'Registration';
    }
  }

  clear() {
    localStorage.clear();
    this.getFormData();
  }
}
