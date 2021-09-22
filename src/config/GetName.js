export const generateName = (name) => {
  let result = name[0] ? name[0] : " ";

  for (let i = 0; i < name.length; i++) {
    if (name[i] === " " && name[i + 1] && name[i + 1] !== " ")
      result += name[i + 1];
  }

  return result;
};
