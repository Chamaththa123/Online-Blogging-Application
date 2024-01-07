import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'addArticle', component: AddarticleComponent },

  // ...
  //   { path: '**', component: Page }
];

@NgModule({
  declarations: [
    AppComponent,
    AddarticleComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule, HttpClientModule, ReactiveFormsModule,],
  exports: [RouterModule,AddarticleComponent],
})
export class AppRoutinroutesgModule {}
