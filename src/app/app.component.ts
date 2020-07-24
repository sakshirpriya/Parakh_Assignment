import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  arr: any = []

  add() {
    this.arr.push({ num1: '', num2: '', sum: '' })
  }
  delete() {

    this.arr.pop()
  }
  deleteAtLocation(index){
    this.arr.splice(index, 1);
  }
  givenNum1(value, location) {
    let num1 = Number(value.target.value)
    this.arr[location]['num1'] = num1
  }
  givenNum2(value, location) {
    let num2 = Number(value.target.value)
    this.arr[location]['num2'] = num2
    this.sumOfTwoNumber(location)
  }
  sumOfTwoNumber(location) {
    console.log(this.arr[location]['num1'] + ' ' + this.arr[location]['num2'])
    this.arr[location]['sum'] = this.arr[location]['num1'] + this.arr[location]['num2']
  }
}
