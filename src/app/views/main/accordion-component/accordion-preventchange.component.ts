import { Component } from '@angular/core';
import {
  NgbAccordionModule,
  NgbPanelChangeEvent,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-preventchange',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './accordion-preventchange.html',
})
export class NgbdAccordionPreventchange {

}
