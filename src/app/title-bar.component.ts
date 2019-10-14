import { Component } from '@angular/core';

@Component({
  selector: 'title-bar',
  template:
    `
      <div id = 'title-bar'>
        <b>{{title}}</b>
      </div>
    `,
  styles: [`
      #title-bar {
        width: 100%;
        background: linear-gradient(#0144af, #01296b);
        height: 50px;
        text-align: center;
        vertical-align: center;
        font-size: 40px;
        color: white;
      }
    `]
})

export class TitleBarComponent {
  title = "Craigsbay";
}
