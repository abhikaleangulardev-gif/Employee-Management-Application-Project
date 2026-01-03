import { Routes } from '@angular/router';
import { EmployeeDashboard } from './component/employee-dashboard/employee-dashboard';
import { AddEmployee } from './component/add-employee/add-employee';
import { EditEmployee } from './component/edit-employee/edit-employee';
import { ViewEmployee } from './component/view-employee/view-employee';
import { EmployeeList } from './component/employee-list/employee-list';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee-dashboard', pathMatch: 'full' },
    {
        path: 'Employee-dashboard', component: EmployeeDashboard,
        children: [
            { path: 'list-dashboard', component: EmployeeList },
            { path: 'add-dashboard', component: AddEmployee },
            { path: 'edit-dashboard', component: EditEmployee },
            { path: 'view-dashboard', component: ViewEmployee },
        ]
    }
];
