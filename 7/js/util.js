//module with functions

const customRandom = function(from, to) {
  if (from < 0 || to < 0) {
    throw new Error('Arguments should be positive');
  }
  if (from > to) {
    [from, to] = [to, from];
  } else if (from === to) {
    return from;
  }
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
};

const lengthCheck = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;
lengthCheck('allowed', 7);

export {customRandom};
