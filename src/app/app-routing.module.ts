import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { CreatPostComponent } from "./post/create-post/create-post.component";
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'create-post',component:CreatPostComponent,canActivate:[AuthGuard]},
  {path:'list-subreddits',component:ListSubredditsComponent},
  {path:'view-post/:id',component:ViewPostComponent},
  {path:'user-profile/:name',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'create-subreddit',component:CreateSubredditComponent,canActivate:[AuthGuard]},
  {path:'signup',component: SignupComponent},
  {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
