import { Component } from "@angular/core";


@Component ({
    selector: 'app-test',
    templateUrl: "./test.component.html"
})
export class TestComponent {
    getElementId(a:any){
        console.log(a.id)
      }
}