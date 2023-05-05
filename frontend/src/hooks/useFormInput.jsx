import { useState } from 'react';

/**
 * This function creates an input field with an initial value. It returns an object containing the input value and a
 * function to update that value.
 *
 * @param {any} initialValue - The initial value of the input field.
 * @returns {object} An object containing the input value and a function to update that value.
 */
export default function useFormInput(initialValue) {
  // Declare a state variable called "value" and initialize it to the initial value passed as an argument.
  const [value, setValue] = useState(initialValue);

  /**
   * This function is called whenever the value of the input field changes. It updates the "value" state variable to
   * reflect the new value.
   *
   * @param {object} e - The "change" event object that triggered this function.
   */
  function handleChange(e) {
    setValue(e.target.value);
  }

  // Create an object containing the value of the input field and the "handleChange" function to update that value.
  const inputProps = {
    value: value,
    onChange: handleChange
  };

  // Return the object containing the input value and the function to update that value.
  return inputProps;
}
// This code makes it easy to create a special type of input field that remembers what you type into it. 
//All you have to do is call a special function and tell it what you want the input field to start out saying. 
//Then, the function will give you back some instructions that you can use to put the input field on your web page.


