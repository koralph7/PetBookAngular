import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PetComponent } from './pet/pet.component';
import { PetService } from './pet/pet.service';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetSmallComponent } from './pet-small/pet-small.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PetAddComponent } from './pet-add/pet-add.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { IdSenderService } from './home/idSender.service';
import { SharedModule } from './shared/shared.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostService } from './my-profile/post.service';
import { BoardComponent } from './board/board.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import { FriendService } from './friend-profile/friend.service';
import { NotificationComponent } from './notification/notification.component';

import { FriendRequestComponent } from './friend-request/friend-request.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    PetComponent,
    PetListComponent,
    PetSmallComponent,
    PetEditComponent,
    PetAddComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    PmComponent,
    MyProfileComponent,
    BoardComponent,
    SearchUserComponent,
    FriendProfileComponent,
    NotificationComponent,
  
    FriendRequestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,

    
  
  ],
  providers: [PetService, IdSenderService, PostService, FriendService, httpInterceptorProviders, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
