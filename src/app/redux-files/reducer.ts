import { States } from "src/app/redux-files/states";

const initialState: States = {
  firstName: {
    value: "",
    isTouched: false,
    hasFocus: false
  },
  lastName: {
    value: "",
    isTouched: false,
    hasFocus: false
  }
};

export function Reducer(state = initialState, action) {
  switch (action.formNumber) {
    case 1:
      return Reducer1(state, action);
    case 2:
      return Reducer2(state, action);
    default:
      return state;
  }
}

export function Reducer1(state = initialState, action) {
  if (action.formNumber === 1) {
    switch (action.type) {
      case "FIRST_NAME_VALUE_UPDATED":
        return Object.assign({}, state, {
          firstName: {
            value: action.updatedValue,
            hasFocus: state.firstName.hasFocus,
            isTouched: state.firstName.isTouched
          }
        });
      case "LAST_NAME_VALUE_UPDATED":
        return Object.assign({}, state, {
          lastName: {
            value: action.updatedValue,
            hasFocus: state.lastName.hasFocus,
            isTouched: state.lastName.isTouched
          }
        });
      case "FIRST_NAME_FOCUSED":
        return Object.assign({}, state, {
          firstName: {
            value: state.firstName.value,
            hasFocus: true,
            isTouched: true
          }
        });
      case "LAST_NAME_FOCUSED":
        return Object.assign({}, state, {
          lastName: {
            value: state.lastName.value,
            hasFocus: true,
            isTouched: true
          }
        });
      case "FIRST_NAME_NOT_FOCUSED":
        return Object.assign({}, state, {
          firstName: {
            value: state.firstName.value,
            hasFocus: false,
            isTouched: state.firstName.isTouched
          }
        });
      case "LAST_NAME_NOT_FOCUSED":
        return Object.assign({}, state, {
          lastName: {
            value: state.lastName.value,
            hasFocus: false,
            isTouched: state.lastName.isTouched
          }
        });
      default:
        return state;
    }
  } else {
    return state;
  }
}

export function Reducer2(state = initialState, action) {
  if (action.formNumber === 2) {
    switch (action.type) {
      case "FIRST_NAME_VALUE_UPDATED":
        return Object.assign({}, state, {
          firstName: {
            value: action.updatedValue,
            hasFocus: state.firstName.hasFocus,
            isTouched: state.firstName.isTouched
          }
        });
      case "LAST_NAME_VALUE_UPDATED":
        return Object.assign({}, state, {
          lastName: {
            value: action.updatedValue,
            hasFocus: state.lastName.hasFocus,
            isTouched: state.lastName.isTouched
          }
        });
      case "FIRST_NAME_FOCUSED":
        return Object.assign({}, state, {
          firstName: {
            value: state.firstName.value,
            hasFocus: true,
            isTouched: true
          }
        });
      case "LAST_NAME_FOCUSED":
        return Object.assign({}, state, {
          lastName: {
            value: state.lastName.value,
            hasFocus: true,
            isTouched: true
          }
        });
      case "FIRST_NAME_NOT_FOCUSED":
        return Object.assign({}, state, {
          firstName: {
            value: state.firstName.value,
            hasFocus: false,
            isTouched: state.firstName.isTouched
          }
        });
      case "LAST_NAME_NOT_FOCUSED":
        return Object.assign({}, state, {
          lastName: {
            value: state.lastName.value,
            hasFocus: false,
            isTouched: state.lastName.isTouched
          }
        });
      default:
        return state;
    }
  } else {
    return state;
  }
}
