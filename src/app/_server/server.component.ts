import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent implements OnInit {
  @Input('serverName') element: {type: string, name: string, content: string}
  constructor() {
    console.log('constructor call');
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    
  }
  
  test() {
    console.log('test')
  }
}
