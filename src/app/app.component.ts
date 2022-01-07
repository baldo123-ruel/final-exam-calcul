import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-exam-cal';

  output = '';
  display: string = '';


  num(num: string) {

    
    if (num == ".") {
      if (this.output != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }

    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num == "0") {
      if (this.output == "") {
        return;
      }
      const PrevKey = this.output[this.output.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
        return;
      }
    }

    this.output = this.output + num
    this.del();
  }


  getLastOperand() {
    let init : number;
    console.log(this.output)
    init  = this.output.toString().lastIndexOf("+")
    if (this.output.toString().lastIndexOf("-") > init )  init   = this.output.lastIndexOf("-")
    if (this.output.toString().lastIndexOf("*") > init )  init  = this.output.lastIndexOf("*")
    if (this.output.toString().lastIndexOf("/") >  init  ) init   = this.output.lastIndexOf("/")
    console.log('' + this.output.substr(init   + 1))
    return this.output.substr( init   + 1)
  }

  clear() {
    if (this.output!= "" || this.display!= "") {
        this.output = this.output.substr(0, this.output.length - 1)
        this.display = this.display.substr(0, this.display.length - 1)
    }
  }
  operator(Operator: string) {

   
    const lastKey = this.output[this.output.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.output = this.output + Operator
    this.del();
  }


  

  clearall() {
    this.display= '';
    this.output = '';
  }
  calclear() {
    if (this.output != "") {
      this.output = this.output.substr(0, this.output.length - 1)
    }
  }
  del() {
    let initialize = this.output;

    let lastKey = initialize[initialize.length - 1];

    if (lastKey === '.') {
      initialize =initialize.substr(0,initialize.length - 1);
    }

    lastKey = initialize[initialize.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      initialize = initialize.substr(0, initialize.length - 1);
    }

    console.log("init " + initialize);
    this.display = eval(initialize);
  }

  calinput() {
    this.del();
    this.output= this.display;
    if (this.output == "0") this.output = "";
  }

}
