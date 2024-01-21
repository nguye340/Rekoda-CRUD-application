import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	htmlToAdd!: string;

	constructor(private router: Router) { }

	scriptItem = document.getElementById('itemReload');
	ngOnInit(): void {

		if (this.scriptItem == null) {
			/*
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate(['/login']);*/
			this.htmlToAdd = ``;

		}
	}

	ngAfterViewInit(): void {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton!.addEventListener('click', () => {
			container!.classList.add("right-panel-active");
			
		});

		signInButton!.addEventListener('click', () => {
			container!.classList.remove("right-panel-active");
		});
	}
	
	
	reloadComponent() {
		this.ngOnInit();


		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate(['/login']);
	}
}
