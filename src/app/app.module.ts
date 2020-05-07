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

@NgModule({
  declarations: [
    AppComponent,
    TopicInterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplateReffrenceVarriableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    // TopicInterpolationComponent,PropertybindingComponent,
    // ClassbindingComponent,
    // StylebindingComponent,
    //EventbindingComponent,
    TemplateReffrenceVarriableComponent
  ]
})
export class AppModule { }
