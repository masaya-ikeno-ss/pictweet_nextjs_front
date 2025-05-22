"use client"

import SearchPageClient from "@/app/_components/SearchPageClient"
import { Suspense } from "react"

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPageClient />
    </Suspense>
  )
}

export default SearchPage