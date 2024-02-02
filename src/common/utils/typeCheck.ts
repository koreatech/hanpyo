/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
function getType(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target: any): target is string {
  return getType(target) === 'String';
}

function isNumber(target: any): target is number {
  return getType(target) === 'Number';
}

function isBoolean(target: any): target is boolean {
  return getType(target) === 'Boolean';
}

function isNull(target: any): target is null {
  return getType(target) === 'Null';
}

function isUndefined(target: any): target is undefined {
  return getType(target) === 'Undefined';
}

function isObject(target: any): target is object {
  return getType(target) === 'Object';
}

function isArray<T>(target: any): target is Array<T> {
  return getType(target) === 'Array';
}

function isDate(target: any): target is Date {
  return getType(target) === 'Date';
}

function isFunction(target: any): target is Function {
  return getType(target) === 'Function';
}

export { isString, isNumber, isBoolean, isNull, isUndefined, isObject, isArray, isDate, isFunction };
