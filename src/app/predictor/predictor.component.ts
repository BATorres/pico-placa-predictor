import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css'],
})
export class PredictorComponent implements OnInit {
  public message: string;
  public form: FormGroup;
  public isPredicted = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  public setForm(): void {
    this.form = this.formBuilder.group({
      license_plate: [null, Validators.required],
      date: [null, Validators.required],
      hour: [null, Validators.required],
    });
  }

  public predict(data) {
    const lastDigit = +data.license_plate.substr(data.license_plate.length - 1);
    const selectedDay = new Date(data.date).getDay();
    const selectedTime = data.hour;

    this.isPredicted = true;

    if (
      (selectedTime > '06:59' && selectedTime < '09:31') ||
      (selectedTime > '15:59' && selectedTime < '19:31')
    ) {
      switch (selectedDay) {
        case 0:
          if (lastDigit === 1 || lastDigit === 2) {
            this.message = 'No puede circular';
          } else {
            this.message = 'Puede circular';
          }
          break;
        case 1:
          if (lastDigit === 3 || lastDigit === 4) {
            this.message = 'No puede circular';
          } else {
            this.message = 'Puede circular';
          }
          break;
        case 2:
          if (lastDigit === 5 || lastDigit === 6) {
            this.message = 'No puede circular';
          } else {
            this.message = 'Puede circular';
          }
          break;
        case 3:
          if (lastDigit === 7 || lastDigit === 8) {
            this.message = 'No puede circular';
          } else {
            this.message = 'Puede circular';
          }
          break;
        case 4:
          if (lastDigit === 9 || lastDigit === 0) {
            this.message = 'No puede circular';
          } else {
            this.message = 'Puede circular';
          }
          break;
      }
    } else {
      this.message = 'Puede circular';
    }
  }

  public submit() {
    this.predict(this.form.value);
  }
}
