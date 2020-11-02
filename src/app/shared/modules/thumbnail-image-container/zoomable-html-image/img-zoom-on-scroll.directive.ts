import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
	selector: '[imgZoomOnScroll]'
})
export class ImgZoomOnScrollDirective {

	constructor(
		private el: ElementRef,
		private renderer: Renderer2
	) {
	}


	@HostListener('wheel', ['$event']) onWheel(event) {
		event.preventDefault();

		if (event.deltaY > 0) this.changeSize(2);
		if (event.deltaY < 0) this.changeSize(-2);
	}


	private changeSize(sizeChange) {
		let img = this.__getNestedImg();

		let newWidth = img.width + sizeChange;
		this.renderer.setStyle(img, 'width', `${newWidth}px`);
	}


	private __getNestedImg(): HTMLImageElement {
		return this.el.nativeElement.children[0];
	}

}
