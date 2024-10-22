import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route: any = createLazyFileRoute('/' as never)({
    component: () => <div>Home page</div>,
})
