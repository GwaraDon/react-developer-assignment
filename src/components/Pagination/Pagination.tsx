import React from "react";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function PaginationComponent({
    currentPage,
    totalPages,
}: PaginationProps) {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 2) {
                endPage = 4;
            } else if (currentPage >= totalPages - 1) {
                startPage = totalPages - 3;
            }

            if (startPage > 2) {
                pageNumbers.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages - 1) {
                pageNumbers.push("...");
            }

            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <Pagination className="my-8">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={`/?page=${Math.max(1, currentPage - 1)}`}
                        aria-disabled={currentPage === 1}
                        className={
                            currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : ""
                        }
                    />
                </PaginationItem>

                {pageNumbers.map((page, index) => (
                    <PaginationItem key={index}>
                        {page === "..." ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                href={`/?page=${page}`}
                                isActive={currentPage === page}
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href={`/?page=${Math.min(totalPages, currentPage + 1)}`}
                        aria-disabled={currentPage === totalPages}
                        className={
                            currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
