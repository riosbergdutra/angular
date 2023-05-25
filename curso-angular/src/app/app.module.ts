// aqui fica os importamentos de components tudo que criar com generate component fica aqui;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// este é o formsModulo
import { appRoutingModule } from './app-routing-module';
//coloque-o também no imports ao lado do formsmodule

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDateComponent } from './components/parent-date/parent-date.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { CangeNumberComponent } from './components/cange-number/cange-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDateComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    CangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, appRoutingModule
  ], // aqui ficam os modulos extras colocando FormsModule agora estamos apto para trabalhar com recursos de formularios do angular

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
