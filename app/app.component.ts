import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <h1>Angular2 CRUD Demo App</h1>
  <h2>Keylog companies</h2>
  Company name to delete: <input #dcompanyName (blur)="deleteCompany(dcompanyName.value); dcompanyName.value='' ">
  <button (click)="deleteCompany(companyName.value)">Delete Company</button>
  <ul>
    <li *ngFor='let company of companies'>{{company.BusinessTradingName}}, {{company.BusinessDescription}}, {{company.BusinessDisplayName}}, {{company.BusinessNumber}}, {{company.CompanyNumber}}, {{company.BusinessLandline}}, {{company.BusinessFaxNumber}}, {{company.BusinessWebsiteUrl}}, {{company.BusinessContactUsEmail}}
  </ul>
  <input #companyName (blur)="addCompany(companyName.value); companyName.value='' ">
  <button (click)="addCompany(companyName.value)">Create Company</button>
  `
})
export class AppComponent {


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