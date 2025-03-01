import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  isLoading = true;
  selectedUser: any = null;
  private modalInstance: any;

  constructor(private http: HttpClient, private router: Router) {
    console.log('HomeComponent instantiated');
    console.log('HttpClient:', this.http);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        this.userList = res;
        this.isLoading = false; // Data loaded
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      },
    });
  }

  selectUser(user: User) {
    this.router.navigate(['/users', user.id]); // Navigate to user details page
  }
}
