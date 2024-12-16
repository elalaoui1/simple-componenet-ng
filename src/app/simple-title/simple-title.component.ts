import { Component } from '@angular/core';
import { SimpleDesComponent } from '../simple-des/simple-des.component';

@Component({
  selector: 'app-simple-title',
  imports: [SimpleDesComponent],
  templateUrl: './simple-title.component.html',
  styleUrl: './simple-title.component.scss'
})
export class SimpleTitleComponent {
  title = 'simple-componenet';
}
