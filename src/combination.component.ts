import { Component } from '@angular/core';

@Component({
    selector: 'combination-lock',
    templateUrl: './combination.component.html',
    styleUrls: ['./combination.component.css']
})
export class CombinationComponent {
    public myArray = ["Hello", "darkness", "my", "old", "friend"];
    public currWords = [0, 0];

    rotate(id: number): void {
        this.currWords[id] = (this.currWords[id] + 1) % this.myArray.length;
    }

}