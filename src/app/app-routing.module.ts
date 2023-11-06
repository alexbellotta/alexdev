import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { SocialComponent } from './social/social.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-hero', pathMatch: 'full' },
  {path: 'app-header', component: HeaderComponent},
  {path: 'app-about', component: AboutComponent},
  {path: 'app-contacts', component: ContactsComponent},
  {path: 'app-footer', component: FooterComponent},
  {path: 'app-hero', component: HeroComponent},
  {path: 'app-projects', component: ProjectsComponent},
  {path: 'app-skill', component: SkillComponent},
  {path: 'app-social', component: SocialComponent},
  {path: 'app-work', component: WorkComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
