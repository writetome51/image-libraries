import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';


@Component({
	selector: 'progress-bar',
	template: `<div #div class="progress-bar fixed-overlay">0 %</div>`,
	styles: [
		`.progress-bar {
			width: 1px;
			height: 30px;
			padding-left: 10px;
			background-color: #04AA6D;
			text-align: left; color: white;
			line-height: 30px;
		}`
	]
})
export class ProgressBarComponent implements OnDestroy, AfterViewInit {

	@ViewChild('div') progressBar: ElementRef;
	@Input() progress: {percentageComplete: number};
	private __interval;


	ngAfterViewInit() {
		this.__interval = setInterval(
			() => {
				this.progressBar.nativeElement.style.width = this.progress.percentageComplete + '%';
				this.progressBar.nativeElement.innerHTML = this.progress.percentageComplete + ' %';
			},
			100
		);
	}


	ngOnDestroy() {
		clearInterval(this.__interval);
		this.progress.percentageComplete = 0;
	}

}
