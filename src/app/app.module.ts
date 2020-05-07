import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicInterpolationComponent } from './topic-interpolation/topic-interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplateReffrenceVarriableComponent } from './template-reffrence-varriable/template-reffrence-varriable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms'; // for two way binding we ned to import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    TopicInterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplateReffrenceVarriableComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // for two way binding we ned to import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    // TopicInterpolationComponent,PropertybindingComponent,
    // ClassbindingComponent,
    // StylebindingComponent,
    //EventbindingComponent,
    //TemplateReffrenceVarriableComponent,
    TwoWayBindingComponent
  ]
})
export class AppModule { }
