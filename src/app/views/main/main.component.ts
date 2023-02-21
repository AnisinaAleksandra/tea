import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  myModal: boolean = false;
 
  private observable: Observable<any>;
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal) {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(
          this.modalService.open(this.popup, {
            ariaLabelledBy: 'modal-basic-title',
          })
        );
        observer.complete();
      }, 10000);
    });
  }
  ngOnInit(): void {
    this.observable.subscribe();
  }
  closeModal() {
    return (this.myModal = false);
  }
}
