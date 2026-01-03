import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  imports: [RouterOutlet],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard {
isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    const wrapper = document.getElementById('wrapper');
    wrapper?.classList.toggle('toggled');
  }
}
