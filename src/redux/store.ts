import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import deleteModalReducer from "./features/deleteModalSlice";
import updateSupplyModalReducer from "./features/updateSupplyModalSlice";
import authReducer from "./features/auth/authSlice";

const authPersistedUser = {
  key: "auth",
  storage,
};

const deleteModalPersistConfig = {
  key: "deleteModal",
  storage,
};

const updateSupplyModalPersistConfig = {
  key: "updateSupplyModal",
  storage,
};

const authPersistedReducer = persistReducer(authPersistedUser, authReducer);
const deleteModalPersistedReducer = persistReducer(deleteModalPersistConfig, deleteModalReducer);
const updateSupplyModalPersistedReducer = persistReducer(
  updateSupplyModalPersistConfig,
  updateSupplyModalReducer
);

export const store = configureStore({
  reducer: {
    // for server state
    [baseApi.reducerPath]: baseApi.reducer,

    // localState for delete modal
    deleteModal: deleteModalPersistedReducer,

    // localState for update modal
    updateSupplyModal: updateSupplyModalPersistedReducer,

    // localState for auth
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
