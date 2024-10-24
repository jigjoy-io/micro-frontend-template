import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import storage from 'redux-persist/lib/storage'
import exampleCounterReducer from "../reducers/example-counter-reducer"

const rootReducer = combineReducers({
    counter: exampleCounterReducer,
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['counter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useCounterValue = () => useAppSelector((state) => state.counter.value);