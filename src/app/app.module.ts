import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LavaComponent } from './lava/lava.component';
import { faFolderOpen, faCodeBranch,faEye,faLaptopFile,faGraduationCap,faBolt,faPen,faBars } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    LavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(library: FaIconLibrary) {
    library.addIcons(faFolderOpen);
    library.addIcons(faCodeBranch);
    library.addIcons(faEye);
    library.addIcons(faLaptopFile);    
    library.addIcons(faGraduationCap);
    library.addIcons(faBolt);
    library.addIcons(faPen);
    library.addIcons(faBars);

  } }
