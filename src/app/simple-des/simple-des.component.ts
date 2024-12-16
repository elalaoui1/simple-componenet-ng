import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-simple-des',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './simple-des.component.html',
  styleUrl: './simple-des.component.scss'
})
export class SimpleDesComponent {
  des : string = 'This is a description of a simple component';
  check : boolean = true;
  updateDes() {
    if(this.check) {
      this.des = 'This is an updated description :)';
      this.check = false;
    }else{
      this.des = 'This is a description of a simple component';
      this.check = true;
    }

  }
}
