import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featuredClicked = new EventEmitter()
    onSelect(feature: string) {
        this.featuredClicked.emit(feature);
        console.log(feature)
    }

}