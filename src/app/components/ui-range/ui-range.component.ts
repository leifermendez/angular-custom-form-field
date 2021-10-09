import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-range',
  templateUrl: './ui-range.component.html',
  styleUrls: ['./ui-range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiRangeComponent),
      multi: true
    }
  ]
})
export class UiRangeComponent implements OnInit, ControlValueAccessor {
  mockPosition: string = ''
  random: number = 0
  value: any = false;
  isDisabled: boolean = false
  constructor() { }

  //TODO: Control Value Accessor
  //TODO🍌

  writeValue(value: any): void {
    //TODO Envia el valor desde el ngModel o ReactiveForm y nosotros lo agarramos 🤓
    console.log('Agarrando valor....', value);
    if (value) {
      this.value = value
    } else {
      this.value = ''
    }
  }

  //TODO🍌
  registerOnChange(fn: any): void { //TODO
    this.onChange = fn
  }

  //TODO🍌
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  //TODO🍌
  setDisableState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  //TODO Cosa nostra! 😁😁😁😁😁😁

  onChange(_: any): void {

  }

  onTouched(): void {

  }

  ngOnInit(): void {
    this.randomPosition()
  }

  randomPosition(): void {
    this.random = Number((Math.random() * (100 - 1) + 1).toFixed(0))
    this.mockPosition = `${this.random}px 0`
  }

  setRandom(): void {
    this.mockPosition = `${this.random}px 0` //TODO: 50px 0
    this.value = (this.random <= 1 && this.random >= -1)//TODO -1,0,1
    this.onChange(this.value)
    this.onTouched()
  }

}
