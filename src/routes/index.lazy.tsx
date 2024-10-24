import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import CounterComponent from '../components/example-counter'

export const Route: any = createLazyFileRoute('/' as never)({
    component: () => <CounterComponent />,
})
