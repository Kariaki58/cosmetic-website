"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter, useSearchParams } from "next/navigation"

export function PaginationDemo() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get("page") || 1)
    const totalPages = 50

    const goToPage = (page) => {
        router.push(`?page=${page}`)
    }

    const generatePages = () => {
        const pages = []

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            pages.push(1)

            if (currentPage > 4) {
                pages.push("ellipsis-start")
            }

            const startPage = Math.max(2, currentPage - 2)
            const endPage = Math.min(totalPages - 1, currentPage + 2)

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i)
            }

            if (currentPage < totalPages - 3) {
                pages.push("ellipsis-end")
            }

            pages.push(totalPages)
        }

        return pages
    }

    const pageItems = generatePages()

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            if (currentPage > 1) goToPage(currentPage - 1)
                        }}
                    />
                </PaginationItem>

                {pageItems.map((item, index) => {
                    if (item === "ellipsis-start" || item === "ellipsis-end") {
                        return (
                            <PaginationItem key={item + index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                    return (
                        <PaginationItem key={item}>
                            <PaginationLink
                                className="cursor-pointer"
                                isActive={item === currentPage}
                                onClick={(e) => {
                                    e.preventDefault()
                                    goToPage(Number(item))
                                }}
                            >
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            if (currentPage < totalPages) goToPage(currentPage + 1)
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
