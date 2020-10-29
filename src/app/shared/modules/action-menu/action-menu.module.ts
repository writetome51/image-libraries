import { AppActionMenuModule } from './app-action-menu/app-action-menu.module';
import { AppActionMenuComponent } from './app-action-menu/app-action-menu.component';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu/image-action-menu.component';
import { ImageActionMenuModule } from './image-action-menu/image-action-menu.module';
import { NgModule } from '@angular/core';


@NgModule({
	imports: [CommonModule, AppActionMenuModule, ImageActionMenuModule],
	exports: [AppActionMenuComponent, ImageActionMenuComponent]
})
export class ActionMenuModule {
}
