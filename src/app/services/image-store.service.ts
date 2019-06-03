import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ImageStoreService {

    images: { name: string, src: string, description: string }[] = [];

}
