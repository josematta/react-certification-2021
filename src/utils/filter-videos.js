export const getFilteredItems = (items, filter) =>
  items.filter(({ id }) => `youtube#${filter}` === id.kind);
