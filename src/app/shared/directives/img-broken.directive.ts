import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const nativeElement = this.host.nativeElement;
    nativeElement.src = './assets/img/notFound.jpg';
  }

  constructor(private host: ElementRef) {
    
  }

}
