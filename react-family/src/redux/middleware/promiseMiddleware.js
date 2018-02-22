import axios from 'axios';

export default store => next => action => {
    const {dispatch, getState} = store;

    /**
     * if dispatch  is a function, do nothing.
     */
    if (typeof action === 'function') {
        action(dispatch, getState);
        return;
    }

    /**
     * parse action
     */
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action;

    /**
     * no promise, means not sent ajax request,
     * go to next step.
     */
    if (!action.promise) {
        return next(action);
    }

    /**
     * parse types
     */
    const [REQUEST,
        SUCCESS,
        FAILURE] = types;

    /**
     * send a action when start request
     */
    next({
        ...rest,
        type: REQUEST
    });

    /*定义请求成功时的方法*/
    const onFulfilled = result => {
        next({
            ...rest,
            result,
            type: SUCCESS
        });
        if (afterSuccess) {
            afterSuccess(dispatch, getState, result);
        }
    };
    /*定义请求失败时的方法*/
    const onRejected = error => {
        next({
            ...rest,
            error,
            type: FAILURE
        });
    };

    return promise(axios)
        .then(onFulfilled, onRejected)
        .catch(error => {
            console.error('MIDDLEWARE ERROR: ', error);
            onRejected(error)
        })

}