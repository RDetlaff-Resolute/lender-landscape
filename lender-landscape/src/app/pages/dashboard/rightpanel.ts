import { Component, Input } from "@angular/core";
import { TreeComponent } from "../../component/tree/tree.component";

@Component({
    selector: 'app-rightpanel',
    imports: [TreeComponent],
    templateUrl: './rightpanel.html'
    
})
export class RightPanel {
    @Input() contactList: any;
}