import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
      background-color: #8b9396 !important;
      color: white;
    }
    .companies .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  template:`
  <h1>Angular2 CRUD Demo App</h1>
  <h2>Keylog companies</h2>
  <p> <button (click)="toggleFormView()">Show/Hide Create Company Form</button> <button (click)="deleteCompany(company)">Delete Selected Company</button> <button (click)="closeUpdateView(); ">Close Company Update Form</button></p>
  <div *ngIf="selectedCompany">
  <h2>Edit Company: {{selectedCompany.BusinessDisplayName}}</h2>
  Company Id: <input [(ngModel)]="selectedCompany.BusinessId" required/><br />
  Company Trading Name: <input [(ngModel)]="selectedCompany.BusinessTradingName" required/><br />
  Company Description: <input [(ngModel)]="selectedCompany.BusinessDescription" required/><br />
  Company Display Name: <input [(ngModel)]="selectedCompany.BusinessDisplayName" required/><br />
  Company Business Number: <input [(ngModel)]="selectedCompany.BusinessNumber" required/><br />
  Company Number: <input [(ngModel)]="selectedCompany.CompanyNumber" required/><br />
  Company Landline: <input [(ngModel)]="selectedCompany.BusinessLandline" required/><br />
  Company Fax: <input [(ngModel)]="selectedCompany.BusinessFaxNumber" required/><br />
  Company URL: <input [(ngModel)]="selectedCompany.BusinessWebsiteUrl" required/><br />
  Company Contact Email: <input [(ngModel)]="selectedCompany.BusinessContactUsEmail" required/><br />
  <p> </p>
  </div>
  <div *ngIf="formView">
  <h2>Create New Company</h2>
  Company Id: <input #companyId /><br />
  Company Trading Name: <input #companyTradeName required/><br />
  Company Description: <input #companyDescription required/><br />
  Company Display Name: <input #companyDisplayName required/><br />
  Company Business Number: <input #companyBusinessNumber required/><br />
  Company Number: <input #companyNumber required/><br />
  Company Landline: <input #companyLandline required/><br />
  Company Fax: <input #companyFaxNumber required/><br />
  Company URL: <input #companyWebsiteUrl required/><br />
  Company Contact Email: <input #companyContactUsEmail required/><br />

  <button (click)="addCompany(companyId.value, companyTradeName.value, companyDescription.value, companyDisplayName.value, companyBusinessNumber.value, companyNumber.value, companyLandline.value, companyFaxNumber.value, companyWebsiteUrl.value, companyContactUsEmail.value); 
  companyId.value=''; companyTradeName.value=''; companyDescription.value=''; companyDisplayName.value=''; companyBusinessNumber.value=''; companyNumber.value=''; companyLandline.value=''; companyFaxNumber.value=''; companyWebsiteUrl.value=''; companyContactUsEmail.value=''; 
  toggleFormView()">Create Company</button>

  </div>
  <ul>
    <li *ngFor='let company of companies' [class.selected]="company === selectedCompany" (click)="onselect(company)"><span class="badge">{{company.BusinessTradingName}}, {{company.BusinessDescription}}, {{company.BusinessDisplayName}}, {{company.BusinessNumber}}, {{company.CompanyNumber}}, {{company.BusinessLandline}}, {{company.BusinessFaxNumber}}, {{company.BusinessWebsiteUrl}}, {{company.BusinessContactUsEmail}}</span>
  </ul>
  `
})
export class AppComponent {
  formView:boolean = false;
  updateView:boolean = false;
  selectedCompany:Company;


  companies:any = [
      new Company(1, "Keylog", "Tag Scan and Go", "Keylog", "123456789", "123456789", "80848054", "80848054", "https://keylog.com.au", "info@keylog.com.au"),
      new Company(1, "Log it out", "Tag, log and go", "LogItOut", "123456781", "123456781", "80848052", "80848053", "https://logitout.com.au", "info@logitout.com.au")
  ]

  addCompany(companyId:any, companyName: any, companyDescription:any, companyDisplayName:any, companyBusinessNumber:any, companyNumber:any, companyLandline:any, companyFaxNumber:any, companyWebsiteUrl:any, companyContactUsEmail:any){
    if (companyName){
      this.companies.push(new Company(companyId, companyName, companyDescription, companyDisplayName, companyBusinessNumber, companyNumber, companyLandline, companyFaxNumber, companyWebsiteUrl, companyContactUsEmail));
    }
  }

  deleteCompany(companyName:any){
    for (var i=0; i < this.companies.length; i++){
      if (this.companies[i].BusinessTradingName == companyName){
        this.companies.splice(i, 1);
        return;
      }
    }
  }

  toggleFormView(){
    this.formView = !this.formView;
  }

  toggleUpdateView(){
    this.updateView = !this.updateView;
  }

  closeUpdateView(){
    this.updateView = false;
    this.selectedCompany = null;
  }

  onselect(company: Company){
    this.selectedCompany = company;
  }

}

export class Company {

    constructor(
        public BusinessId: number,
        public BusinessTradingName: string,
        public BusinessDescription: string,
        public BusinessDisplayName: string,
        public BusinessNumber: string,
        public CompanyNumber: string,
        public BusinessLandline: string,
        public BusinessFaxNumber: string,
        public BusinessWebsiteUrl: string,
        public BusinessContactUsEmail: string
    ) { }
}