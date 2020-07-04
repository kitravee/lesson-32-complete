import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  );

export const selectItem = (collectionUrlParam, itemId) =>
  createSelector([selectCollection(collectionUrlParam)], (collections) =>
    collections
      ? Object.keys(collections.items)
          .filter((key) => Number(collections.items[key].id) === Number(itemId))
          .map((filter) => collections.items[filter])[0]
      : null,
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);

export const selectModalOpen = createSelector(
  [selectShop],
  (shop) => shop.isModalOpen,
);

export const selectModalItem = createSelector(
  [selectShop],
  (shop) => shop.ModalItem,
);

export const selectCurrentRoute = createSelector(
  [selectShop],
  (shop) => shop.currentRoute,
);
