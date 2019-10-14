import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { RouterModule }        from '@angular/router';

import { AppComponent }        from './app.component';
import { ShoppingComponent }   from './shopping.component';
import { PostService }         from './post.service';
import { TitleBarComponent }   from './title-bar.component';
import { PostDetailComponent } from './post-detail.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ShoppingComponent,
    TitleBarComponent,
    PostDetailComponent
  ],
  providers: [
    PostService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
