import { Injectable } from '@angular/core';
import { Processor } from '@interfaces/processor';
import { ZoomOnScrollData } from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable()
export class ToggleZoomOnScrollingProcessorService implements Processor {

	process(zoomOnScroll: typeof ZoomOnScrollData) {
		zoomOnScroll.enabled = !(zoomOnScroll.enabled);
	};

}
