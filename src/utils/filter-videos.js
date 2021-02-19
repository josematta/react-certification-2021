export const getFilteredItems = (items, filter) =>
  items.filter(({ id }) => {
    if (`youtube#${filter}` === id.kind) {
      return true;
    }

    return false;
  });
