import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SqrPipe } from './pipes/sqr.pipe';
import { CurPipe, JoinnamePipe } from './pipes/cur.pipe';
import { UserComponent } from './user/user.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SqrPipe,
    CurPipe,
    JoinnamePipe,
    UserComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
