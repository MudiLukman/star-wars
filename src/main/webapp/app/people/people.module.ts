import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const ROUTES: Routes = [
    {
        path: '',
        component: PeopleComponent
    },
    {
        path: ':name/view',
        component: DetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        MatCardModule,
        MatTableModule,
        MatMenuModule,
        MatPaginatorModule,
        CommonModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [
        PeopleComponent,
        DetailComponent
    ]
})
export class PeopleModule {

}
