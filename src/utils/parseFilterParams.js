const parseContactType = (type) => {
  if (typeof type !== 'string') return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;

  return 'Not found';
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
