import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigateEle: string = 'home';
  onNavigate(feature:string) {
    this.navigateEle = feature;
  }



















  // serverElements = [
  //   {
  //     type: 'server',
  //     name: 'test',
  //     content: "test content sds"
  //   },
  //   {
  //     type: 'blueprint',
  //     name: 'A New blueprint Server ',
  //     content: "Server Descriptions "
  //   },
  // ]
  
  // onServerAdded(serverData: {serverName:string, serverContent:string}){
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   })
  // }

  // onBluePrintAdded(bluePrintData: {serverName:string, serverContent:string}){
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent
  //   })
  // }
}
