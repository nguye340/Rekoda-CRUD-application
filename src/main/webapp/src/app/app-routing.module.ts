import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordingsAddComponent } from './recordings/recordings-add/recordings-add.component';
import { RecordingsListComponent } from './recordings/recordings-list/recordings-list.component';
import { UserComponent } from './user/user.component';
//import { AddPostComponent } from './post/add-post/add-post.component';
//import { PostListComponent } from './post/posts-list/posts-list.component';
//import { UpdatePostComponent } from './post/update-post/update-post.component';
//import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
	{path:'', redirectTo:'post', pathMatch:'full'},
	{path:'add', component:RecordingsAddComponent},
	/*{ path: 'posts', component: PostListComponent },
  	{ path: 'update/:id', component: UpdatePostComponent },*/
  	{ path: 'login', component: UserComponent },
  	{ path: 'list', component: RecordingsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
