import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { PERSON_QUERY } from './graphql';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    person: any;

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const name = this.route.snapshot.params['name'];
        this.apollo.query<any>({
            query: PERSON_QUERY,
            variables: {
                name: name
            }
        }).subscribe(result => this.person = result?.data.person)
    }

    back() {
        window.history.back();
    }
}
