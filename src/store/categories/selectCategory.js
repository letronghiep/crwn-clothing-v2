export const selectCategory = state => state.categories.categories.reduce((acc, docRef) => {
    const { title, items } = docRef;
    acc[title.toLowerCase()] = items;
    return acc;
}, {});