import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';

import { DataService } from './services/data.service'; // import new service here
import { DetailsComponent } from './components/details/details.component';

const appRoutes: Routes = [
  {path: '', component: HomepageBodyComponent},
  {path: 'details_page', component: DetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageBodyComponent,
    DetailsComponent // components go into declarations
  ],
  imports: [
    BrowserModule, // modules go into imports
    HttpModule, // http module import registered
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService], // services  go to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
