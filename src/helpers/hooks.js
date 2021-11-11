import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export default {
  useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    return [
      values,
      (e, key) => setValues({
        ...values,
        [key]: e,
      }),
    ];
  },

  useCustomDispatch: action => {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(action), [dispatch, action]);
  }
};
