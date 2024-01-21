import { Component } from '@angular/core';
import { Router } from '@angular/router';
 declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	title = 'REKODA - P35';
	
	constructor(private router: Router) { }
	
	ngOnInit(): void {
		this.router.navigate(['/add']);
	}
	
	refresh(): void {
	    this.router.navigateByUrl('/login');
	    window.location.reload();
	}
	
	reloadLogin() {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate(['/login']);
		}
		
}