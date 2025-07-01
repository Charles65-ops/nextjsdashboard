<<<<<<< HEAD
import { lusitana } from "@/app/ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { revenue } from "../lib/placeholder-data";
export default function Page(){
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1
            md:text-2x1`}>
                  Dashboard
             </h1> 
             <div className="grip gap-6 sm:grip-cols-2 lg:grid-cols-4">

             </div>
             <div className="mt-6 grip gap-6 sm:grip-cols-2 lg:grip-cols-8">
                <RevenueChart revenue={revenue}/>
             </div>

=======
import {lusitana} from "@/app/ui/fonts"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { revenue } from "../lib/placeholder-data"
export default async function Page(){
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl 
            md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
            </div>
>>>>>>> 278878b78c981d3700c1e834e9cad75a1edff49b
        </main>
    )
}