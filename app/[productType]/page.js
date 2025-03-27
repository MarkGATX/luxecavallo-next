
'use client'
import { Suspense } from "react";
import ProductList from "../components/ProductList";

export default function Page({ params }) {
   

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductList params={params} />
        </Suspense>
    );
}
