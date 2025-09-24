import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
       <div>
        <Button variant="ghost" size="sm" className="px-0">
          <span className="text-lg font-bold">AI Agent Assistant</span>
        </Button>
       </div>
      </div>
    </header>
  )
}

export default Header