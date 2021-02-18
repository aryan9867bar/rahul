import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import { router } from "./routing";
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    LoginSuccessComponent,
    ContentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'student-login', component: StudentLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent},
      { path: 'login-success', component: LoginSuccessComponent,
    children: [
      {
        path: "content", component: ContentComponent
      },
      {
        path:"",
        redirectTo:"/login-success/content",
        pathMatch:"full"
      },
      {
        path: "student-list", component: StudentListComponent
      }

  ]
  },
      { path: '', redirectTo:"/student-login", pathMatch:"full"},
      { path: 'content', component: ContentComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
