import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
export default function Loading() {
    const skeletonCount = 8;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {Array.from({ length: skeletonCount }).map((_, index) => (
                <Card key={index} className="rounded-lg shadow-sm border-0">
                    <CardHeader className="p-4 pb-0">
                        <Skeleton className="rounded w-full h-48" />
                        <Skeleton className="h-4 w-full rounded" />
                    </CardHeader>

                    <CardContent className=" p-4 py-0 space-y-2">
                        <div className="flex gap-2">
                            <Skeleton className="h-5 w-16 rounded" />
                            <Skeleton className="h-5 w-16 rounded" />
                        </div>

                        <Skeleton className="h-4 w-24 rounded" />

                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-16 rounded" />
                            <Skeleton className="h-4 w-20 rounded-full" />
                        </div>

                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-24 rounded" />
                            <Skeleton className="h-4 w-8 rounded" />
                        </div>
                    </CardContent>

                    <CardFooter className="p-4">
                        <Skeleton className="h-4 w-full rounded" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
