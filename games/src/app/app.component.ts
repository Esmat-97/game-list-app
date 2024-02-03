import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';


import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  data:any=[];
  httpCliet=inject(HttpClient)

  ngOnInit(): void {
    this.httpCliet.get('https://api.noroff.dev/api/v1/gamehub')
    .subscribe((w:any)=>{
      console.log(w)
      this.data=w;
    })
  }
  
    

}
