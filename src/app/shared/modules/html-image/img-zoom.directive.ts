import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
	selector: '[img-zoom]'
})
export class ImgZoomDirective {

	constructor(
		private el: ElementRef,
		private renderer: Renderer2
	) {
	}


	@HostListener('wheel', ['$event']) onWheel(event) {
		event.preventDefault();
		if (event.deltaY > 0) this.changeSize(5);
		if (event.deltaY < 0) this.changeSize(-5);
	}


	private changeSize(sizeChange) {
		let width = this.el.nativeElement.offsetWidth;
		let newWidth = width + sizeChange;
		this.renderer.setStyle(this.el.nativeElement, 'width', newWidth + 'px');
	}

}
