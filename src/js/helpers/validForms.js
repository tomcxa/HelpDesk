/* eslint-disable import/prefer-default-export */
export function isValidForm(formData) {
    const checkData = [];
    for (const [value] of formData) {
        checkData.push(value);
    }

    const isEmpty = checkData.some((value) => value === '');
    return isEmpty;
}
