import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // const name = "bachu";   ---- >   error :- A class member cannot have the 'const' keyword.
  // let name="bachu";   ------- >    error :- A class member cannot have the 'let' keyword.
  name: string = "bachu";
  age: number = 30;
  animals: Array<string | number> = ["cat", "dog", "elephant", 1];
  employeeData: Array<object> = [{ name: "bhuvana", age: 28, email: "bhuvana@gmail.com" }];
  add(): void {
    alert("hai");
    const a = 3, b = 4;
    const resultAdd = (a + b);
    console.log(resultAdd);

  };

constructor() { }

ngOnInit() {
}

}
