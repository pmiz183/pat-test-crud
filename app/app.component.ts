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
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  formView:boolean = false;
  updateView:boolean = false;
  selectedCompany:Company;

  companies:any[] = [
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
      if (this.companies[i].BusinessDisplayName == companyName.toString()){
        this.selectedCompany = null;
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