export default function({ dispatch }) {
  return next => action => {


    // if Action does not have payload
    // or, the payload does not have a .then property
    // we don't care abour it, send it on

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
    .then(function(response) {
      // create a new action with the old type, btn-group-vertical
      // replace the promise with the response data
      const newAction = { ...action, payload: response }
      dispatch(newAction);
    });

  };
}
