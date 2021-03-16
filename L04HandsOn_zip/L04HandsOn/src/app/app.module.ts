import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import{ ContactsService } from './services/contacts.service';
// add the following import statement:
import { SkillsService } from './services/skills.service';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, ContactsComponent],
  imports: [BrowserModule],
  // add SkillsService to the providers array:
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {}