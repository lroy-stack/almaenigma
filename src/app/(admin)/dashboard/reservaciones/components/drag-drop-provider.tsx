'use client'

import { ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface DragDropProviderProps {
  children: ReactNode
}

export function DragDropProvider({ children }: DragDropProviderProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  )
}

// Hook para usar en components drag & drop
export const useDragAndDrop = () => {
  return {
    itemTypes: {
      RESERVATION: 'reservation'
    }
  }
}