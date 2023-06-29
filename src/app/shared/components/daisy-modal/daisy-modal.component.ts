import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-daisy-modal',
  templateUrl: './daisy-modal.component.html',
  styleUrls: ['./daisy-modal.component.css']
})
export class DaisyModalComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;

  ngAfterViewInit() {
    // Make sure modal is defined
    console.log(this.modal);
  }

  openModal() {
    // Check if browser supports the HTMLDialogElement
    if ('HTMLDialogElement' in window) {
      this.modal.nativeElement.showModal();
    } else {
      // Fallback for browsers that do not support HTMLDialogElement
      alert('Your browser does not support HTMLDialogElement');
    }
  }
}
