/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
function getType(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target: any): boolean {
  return getType(target) === 'String';
}

function isNumber(target: any): boolean {
  return getType(target) === 'Number';
}

function isBoolean(target: any): boolean {
  return getType(target) === 'Boolean';
}

function isNull(target: any): boolean {
  return getType(target) === 'Null';
}

function isUndefined(target: any): boolean {
  return getType(target) === 'Undefined';
}

function isObject(target: any): boolean {
  return getType(target) === 'Object';
}

function isArray(target: any): boolean {
  return getType(target) === 'Array';
}

function isDate(target: any): boolean {
  return getType(target) === 'Date';
}

function isFunction(target: any): boolean {
  return getType(target) === 'Function';
}

export { isString, isNumber, isBoolean, isNull, isUndefined, isObject, isArray, isDate, isFunction };
