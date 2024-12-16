import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  template: `
    <div class=" top-0 left-0 right-0 flex justify-evenly items-center bg-secondary text-text p-2">
      <div>
        <p class="text-text">Mexico</p>
      </div>
      <div>
        <p>dd/mm/aa</p>
      </div>
    </div>
  `,
})
export class HeaderComponent {}
