import {lusitana} from "@/app/ui/fonts"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import { revenue } from "../../lib/placeholder-data"
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import {  fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
export default async function Page(){
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();
      
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl 
            md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
            </div>
        </main>
    )
}