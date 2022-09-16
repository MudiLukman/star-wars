import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink, HttpLinkHandler } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';

const responseLogger = new ApolloLink((operation, forward) => {
    return forward(operation).map(result => {
        console.info(operation.getContext())
        return result
    })
})

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ApolloModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink) {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'http://localhost:8080/graphql',
                    }),
                };
            },
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
