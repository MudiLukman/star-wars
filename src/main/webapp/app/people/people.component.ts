import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { PEOPLE_QUERY } from './graphql';
import { Router } from '@angular/router';

@Component({
    selector: 'people',
    templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit, AfterViewInit {
    pageSize = 10;
    pageIndex = 0;
    total = 0;
    pageSizeOptions: number[] = [10];
    dataSource!: MatTableDataSource<any>;

    columns: any[] = [
        {label: 'Name', property: 'name'},
        {label: 'Mass', property: 'mass'},
        {label: 'Gender', property: 'gender'},
        {label: 'Home world', property: 'homeworld'}
    ];

    constructor(private apollo: Apollo, private router: Router) {
    }

    get visibleColumns() {
        return this.columns.map(column => column.property);
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource();
        this.searchPeople();
    }

    ngAfterViewInit() {
    }

    page(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.searchPeople();
    }

    searchPeople() {
        this.apollo.watchQuery<any>({
            query: PEOPLE_QUERY,
            variables: {
                page: this.pageIndex + 1
            }
        }).valueChanges.subscribe(result => {
            this.total = result.data.people.count;
            this.dataSource.data = result.data.people.results;
        })
    }

    viewPerson(person: any) {
        this.router.navigate([person.name, 'view'])
    }

    trackByProperty<T>(index: number, column: any) {
        return column.property;
    }

}
