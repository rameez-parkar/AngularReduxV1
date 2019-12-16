export function FirstNameFocusedInAction(formNumber) {
  return {
    type: "FIRST_NAME_FOCUSED",
    formNumber: formNumber
  };
}

export function FirstNameFocusedOutAction(formNumber) {
  return {
    type: "FIRST_NAME_NOT_FOCUSED",
    formNumber: formNumber
  };
}

export function FirstNameUpdatedValueAction(updatedValue, formNumber) {
  return {
    type: "FIRST_NAME_VALUE_UPDATED",
    updatedValue: updatedValue,
    formNumber: formNumber
  };
}

export function LastNameFocusedInAction(formNumber) {
  return {
    type: "LAST_NAME_FOCUSED",
    formNumber: formNumber
  };
}

export function LastNameFocusedOutAction(formNumber) {
  return {
    type: "LAST_NAME_NOT_FOCUSED",
    formNumber: formNumber
  };
}

export function LastNameUpdatedValueAction(updatedValue, formNumber) {
  return {
    type: "LAST_NAME_VALUE_UPDATED",
    updatedValue: updatedValue,
    formNumber: formNumber
  };
}
