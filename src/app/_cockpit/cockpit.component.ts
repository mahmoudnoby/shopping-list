import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName: string = ''; //using with 2 way binding
  newServerContent:string = ''; //using with 2 way binding
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  constructor() { 
    console.log("this Constructor");
    
  }

  ngOnInit(): void {
    console.log("this ngOnInit");
    
  }

  onAddServer(){
   this.serverCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
   });
  }

  onAddBluePrint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

}
