import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { AllImagesPaginatorService } from '../../app-paginator/all-images-paginator.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(
		_paginator: AllImagesPaginatorService
	) {
		super(_paginator);
	}

}
