const searchHistory = (() => {
  let items = [];

  const getHistory = () => {
    return items;
  };

  const addToHistory = (city) => {
    if (items.includes(city)) {
      let index = items.indexOf(city);
      items.splice(index, 1);
    }
    if (items.length > 8) {
      items.pop();
    }
    items.unshift(city);
  };

  return { getHistory, addToHistory };
})();
