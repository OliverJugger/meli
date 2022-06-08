import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertModule } from './expert/expert.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheNukerInterceptor } from './cache-nuker.interceptor';
import { ServerErrorInterceptor } from './server-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ExpertModule
  ],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CacheNukerInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ServerErrorInterceptor,
			multi: true
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
