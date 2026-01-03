import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDashboard } from "./component/employee-dashboard/employee-dashboard";

@Component({
  selector: 'app-root',
  imports: [ EmployeeDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicEmployee-Management-Application');
}
