import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {
  @Input() childrenListen: string = "";
  @Input() childrenListenAgain: string = ""
}
