import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { AllImagesPageJumperService } from '../page-jumper/all-images-page-jumper.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(
		_allImagesPageJumper: AllImagesPageJumperService
	) {
		super(_allImagesPageJumper);
	}

}
