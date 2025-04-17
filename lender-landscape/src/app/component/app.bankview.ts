import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Dashboard } from "../pages/dashboard/dashboard";

@Component({
    selector: 'bank-view',
    imports: [RouterOutlet],
    template: `
    <div>
        <router-outlet></router-outlet>
        <!-- <router-outlet (activate)="onOutletLoaded($event)"></router-outlet> -->
    </div>
    `
})
export class BankView {
    // onOutletLoaded(component: Dashboard) {
    //     component.companyId = 2486881241;
    // }

}