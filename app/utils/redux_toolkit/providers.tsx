"use client"
import React from 'react';
import { Provider } from 'react-redux'; // Adjust the import path to where your store is defined
import appStore from '@/utils/redux_toolkit/appStore';

export function Providers({ children }: { children: React.ReactNode }) {
    return (<Provider store={appStore}>{children}</Provider>)
}