import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SimpleTitleComponent } from './simple-title/simple-title.component';
import { SimpleHomeComponent } from './simple-home/simple-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,SimpleTitleComponent ,SimpleHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-componenet';
}
