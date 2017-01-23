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
  Company name to Edit: <input #companyName (blur)="deleteCompany(companyName.value); companyName.value='' ">
  <button (click)="createCompany(companyName.value)">Create Company</button><button (click)="deleteCompany(companyName.value)">Delete Company</button>
  <p> <button (click)="toggleFormView()">Show/Hide Create Company Form</button></p>
  <div *ngIf="formView">
  <form>
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
  <button>Create Company</button>
  </form>
  </div>
  <ul>
    <li *ngFor='let company of companies'>{{company.BusinessTradingName}}, {{company.BusinessDescription}}, {{company.BusinessDisplayName}}, {{company.BusinessNumber}}, {{company.CompanyNumber}}, {{company.BusinessLandline}}, {{company.BusinessFaxNumber}}, {{company.BusinessWebsiteUrl}}, {{company.BusinessContactUsEmail}}
  </ul>
  `
})
export class AppComponent {
  formView:boolean = false;
  selectedCompany:Company;


  companies:any = [
      new Company(1, "Keylog", "Tag Scan and Go", "Keylog", "123456789", "123456789", "80848054", "80848054", "https://keylog.com.au", "info@keylog.com.au"),
      new Company(1, "Log it out", "Tag, log and go", "LogItOut", "123456781", "123456781", "80848052", "80848053", "https://logitout.com.au", "info@logitout.com.au")
  ]

  addCompany(companyName: string){
    if (companyName){
      this.companies.push(new Company(1, companyName, companyName, companyName, "123456789", "123456789", "80848054", "80848054", "https://keylog.com.au", "info@keylog.com.au"));
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