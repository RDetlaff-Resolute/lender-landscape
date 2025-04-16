import { Component } from "@angular/core";
import { ActivityComponent } from "../../component/activity/activity.component";
import { NotesComponent } from "../../component/notes/notes.component";
import { PortfolioComponent } from "../../component/portfolio/portfolio.component";

@Component({
    selector: 'app-leftpanel',
    imports: [ActivityComponent, NotesComponent, PortfolioComponent],
    templateUrl: './leftpanel.html'
})
export class LeftPanel {}