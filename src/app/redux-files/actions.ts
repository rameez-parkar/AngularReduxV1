export function FirstNameFocusedInAction() {
  return {
    type: "FIRST_NAME_FOCUSED"
  };
}

export function FirstNameFocusedOutAction() {
  return {
    type: "FIRST_NAME_NOT_FOCUSED"
  };
}

export function FirstNameUpdatedValueAction(updatedValue) {
  return {
    type: "FIRST_NAME_VALUE_UPDATED",
    updatedValue: updatedValue
  };
}

export function LastNameFocusedInAction() {
  return {
    type: "LAST_NAME_FOCUSED"
  };
}

export function LastNameFocusedOutAction() {
  return {
    type: "LAST_NAME_NOT_FOCUSED"
  };
}

export function LastNameUpdatedValueAction(updatedValue) {
  return {
    type: "LAST_NAME_VALUE_UPDATED",
    updatedValue: updatedValue
  };
}
