import { Component } from '@angular/core';

@Component({
  selector: 'app-ribbon-bar',
  templateUrl: './ribbon-bar.component.html',
  styleUrls: ['./ribbon-bar.component.scss'],
})
export class RibbonBarComponent {
  buttonsGroup1 = ['New', 'Open', 'Save'];
  buttonsGroup2 = ['Undo', 'Redo'];

  onButtonClick(action: string) {
    console.log(`${action} button clicked`);
  }
}