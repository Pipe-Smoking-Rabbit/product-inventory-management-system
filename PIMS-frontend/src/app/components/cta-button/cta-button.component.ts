import { Component, input, output } from '@angular/core';

type CtaButtonType = 'edit' | 'delete';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.css',
})
export class CtaButtonComponent {
  type = input<CtaButtonType>('edit');
  buttonText = input('Click Me');
  buttonClick = output();

  handleClick() {
    this.buttonClick.emit();
  }
}
