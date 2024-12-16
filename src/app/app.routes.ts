import { Routes } from '@angular/router';
import { SimpleHomeComponent } from './simple-home/simple-home.component';
import { SimpleTitleComponent } from './simple-title/simple-title.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [

  {path: '', component: SimpleHomeComponent},
  {path: "des", component: SimpleTitleComponent,

    children:[
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent},
    ]
  },
  // {path: '', redirectTo: '/des', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

