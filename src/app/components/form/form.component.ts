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
  firstName: string = "";
  lastName: string = "";
  displayStates: States;
  constructor() {}

  ngOnInit() {
    this.GetStateValues();
    Store.subscribe(() => {
      this.GetStateValues();
    });
  }

  GetStateValues() {
    this.displayStates = Store.getState();
    this.firstName = this.displayStates.firstName.value;
    this.lastName = this.displayStates.lastName.value;
  }

  FirstNameValueChanged() {
    Store.dispatch(FirstNameUpdatedValueAction(this.firstName));
  }

  FirstNameFocusedIn() {
    Store.dispatch(FirstNameFocusedInAction());
  }

  FirstNameFocusedOut() {
    Store.dispatch(FirstNameFocusedOutAction());
  }

  LastNameValueChanged() {
    Store.dispatch(LastNameUpdatedValueAction(this.lastName));
  }

  LastNameFocusedIn() {
    Store.dispatch(LastNameFocusedInAction());
  }

  LastNameFocusedOut() {
    Store.dispatch(LastNameFocusedOutAction());
  }
}
