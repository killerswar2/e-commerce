import { createSelector } from "reselect";

const selectShop = (state) => state.collections;

export const shopSelectorCollections = createSelector(
  [selectShop],
  (collection) => collection.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopSelectorCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [shopSelectorCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
