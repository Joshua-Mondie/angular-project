import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user: User | null = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.http
        .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .subscribe((res) => (this.user = res));
    }
  }
}
