import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BoardComponent } from './board/board.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';

const routes: Routes = [

  { path: 'pets', component: PetListComponent},
   { path: 'pets/:id', component: PetComponent},
   {path: 'add', component: PetAddComponent, canActivate: [AuthGuardService]},
   { path: 'pets/edit/:id', component: PetEditComponent},
   { path: 'myProfile', component: MyProfileComponent},
   { path: 'friendProfile/:id', component: FriendProfileComponent},
   

   {
    path: 'home',
    component: HomeComponent
},
{
    path: 'user',
    component: UserComponent
},

{
    path:'board', component: BoardComponent
},

{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'signup',
    component: RegisterComponent
},
{
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
