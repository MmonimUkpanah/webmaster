import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent {
  @Input() childrenListen: string = "";
  childNewMessage: string = "abeg o"

  @Output () newMessage = new EventEmitter<string>()

  emitMessage(){
    this.newMessage.emit(this.childNewMessage)
    
  }
}
