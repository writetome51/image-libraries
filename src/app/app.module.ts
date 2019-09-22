import { AddImagesComponent } from './add-images/add-images.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryModule } from './library/library.module';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SuccessOrErrorMessageComponent }
	from './success-or-error-message/success-or-error-message.component';


@NgModule({
	declarations: [
		AppComponent,
		ChooseImagesFromDeviceComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		EnterImageURLComponent,
		IntroductionComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		SuccessOrErrorMessageComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		LibraryModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
