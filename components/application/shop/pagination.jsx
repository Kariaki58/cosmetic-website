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
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

        if (isMobile) {
            // Mobile view - show only current page and adjacent pages
            if (currentPage > 1) pages.push(currentPage - 1)
            pages.push(currentPage)
            if (currentPage < totalPages) pages.push(currentPage + 1)
        } else if (totalPages <= 7) {
            // Desktop view - show all pages if few
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            // Desktop view - show first, last, and pages around current
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
        <div className="overflow-x-auto">
            <Pagination className="min-w-min">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            className="cursor-pointer select-none"
                            onClick={(e) => {
                                e.preventDefault()
                                if (currentPage > 1) goToPage(currentPage - 1)
                            }}
                            aria-disabled={currentPage === 1}
                            tabIndex={currentPage === 1 ? -1 : undefined}
                        />
                    </PaginationItem>

                    {pageItems.map((item, index) => {
                        if (item === "ellipsis-start" || item === "ellipsis-end") {
                            return (
                                <PaginationItem key={`${item}-${index}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )
                        }

                        return (
                            <PaginationItem key={item}>
                                <PaginationLink
                                    className="cursor-pointer select-none min-w-[2.5rem]"
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
                            className="cursor-pointer select-none"
                            onClick={(e) => {
                                e.preventDefault()
                                if (currentPage < totalPages) goToPage(currentPage + 1)
                            }}
                            aria-disabled={currentPage === totalPages}
                            tabIndex={currentPage === totalPages ? -1 : undefined}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}