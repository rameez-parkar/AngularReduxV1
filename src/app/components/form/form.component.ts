import { Component, OnInit } from "@angular/core";
import { States } from "src/app/redux-files/states";
import { Store } from "src/app/redux-files/store";
import {
  FirstNameFocusedInAction,
  FirstNameFocusedOutAction,
  FirstNameUpdatedValueAction,
  LastNameFocusedInAction,
  LastNameFocusedOutAction,
  LastNameUpdatedValueAction
} from "src/app/redux-files/actions";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  formNumber: number = 1;
  form1FirstName: string = "";
  form1LastName: string = "";
  form2FirstName: string = "";
  form2LastName: string = "";
  displayStates1: States;
  displayStates2: States;
  constructor() {}

  ngOnInit() {
    this.displayStates1 = Store.getState()[1];
    this.displayStates2 = Store.getState()[2];
    this.GetStateValues();
    Store.subscribe(() => {
      this.GetStateValues();
    });
  }

  GetStateValues() {
    if (this.formNumber === 1) {
      this.displayStates1 = Store.getState()[this.formNumber];
      this.form1FirstName = this.displayStates1.firstName.value;
      this.form1LastName = this.displayStates1.lastName.value;
    } else {
      this.displayStates2 = Store.getState()[this.formNumber];
      this.form2FirstName = this.displayStates2.firstName.value;
      this.form2LastName = this.displayStates2.lastName.value;
    }
  }

  FirstNameValueChanged(formNumber: number) {
    this.formNumber = formNumber;
    if (formNumber === 1)
      Store.dispatch(
        FirstNameUpdatedValueAction(this.form1FirstName, this.formNumber)
      );
    else {
      Store.dispatch(
        FirstNameUpdatedValueAction(this.form2FirstName, this.formNumber)
      );
    }
  }

  FirstNameFocusedIn(formNumber: number) {
    this.formNumber = formNumber;
    Store.dispatch(FirstNameFocusedInAction(this.formNumber));
  }

  FirstNameFocusedOut(formNumber: number) {
    this.formNumber = formNumber;
    Store.dispatch(FirstNameFocusedOutAction(this.formNumber));
  }

  LastNameValueChanged(formNumber: number) {
    this.formNumber = formNumber;
    if (formNumber === 1)
      Store.dispatch(
        LastNameUpdatedValueAction(this.form1LastName, this.formNumber)
      );
    else {
      Store.dispatch(
        LastNameUpdatedValueAction(this.form2LastName, this.formNumber)
      );
    }
  }

  LastNameFocusedIn(formNumber: number) {
    this.formNumber = formNumber;
    Store.dispatch(LastNameFocusedInAction(this.formNumber));
  }

  LastNameFocusedOut(formNumber: number) {
    this.formNumber = formNumber;
    Store.dispatch(LastNameFocusedOutAction(this.formNumber));
  }
}
