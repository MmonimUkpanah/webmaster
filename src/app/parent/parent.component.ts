import { Component, ViewChild } from '@angular/core';
import { ThirdChildComponent } from './childComponents/third-child/third-child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  {

  //Child to Parent ... @Output used

  parentRecievesMessage: string = "";

  recieveFirstChildMessage(event: any){
    this.parentRecievesMessage = event;
    console.log("event message from chaild1>>", event);
  }

  //Parent to Child ... @Input used
  messageFromParent: string = "";
  secondMessage: string = "i am hungry";
  fromOutput: string = "";
  speakToChild(){
    this.messageFromParent = "Children, Let's all come for Morning Prayers";
    this.secondMessage = "let's play"
  }


  //@ViewChild
 hitme(){
  console.log('clicked');
  
 }
 thirdChildMessage($event: any){
  console.log($event);
  this.fromOutput = $event
 }
}
