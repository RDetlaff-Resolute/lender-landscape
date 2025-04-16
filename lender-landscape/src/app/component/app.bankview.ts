import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'bank-view',
    imports: [RouterOutlet],
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class BankView {}