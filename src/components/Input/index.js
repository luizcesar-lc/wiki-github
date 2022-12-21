import React from 'react';

import { InputContaner } from './styles';

function Input({ value, onChange }) {
  return (
    <InputContaner>
      <input value={value} onChange={onChange} />
    </InputContaner>
  );
}

export default Input;
