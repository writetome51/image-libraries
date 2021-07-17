import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ImagesSelectedStateService extends Subject<{ imagesSelected: boolean }> {}
