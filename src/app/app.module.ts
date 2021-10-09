import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiTextComponent } from './components/ui-text/ui-text.component';
import { UiSignComponent } from './components/ui-sign/ui-sign.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UiRangeComponent } from './components/ui-range/ui-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UiTextComponent,
    UiSignComponent,
    UiHeaderComponent,
    UiFooterComponent,
    RegisterFormComponent,
    UiRangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
