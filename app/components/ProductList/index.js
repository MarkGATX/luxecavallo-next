'use client'

import { use } from "react";
import { useSuspenseQuery } from "@apollo/client";
import { QUERY_MENS, QUERY_WOMENS, QUERY_HOUSEWARE, QUERY_ACCESSORY } from "@/utils/queries";

export default function ProductList({ params }) { 
    const resolvedParams = use(params);
    const { productType } = resolvedParams;
    const queryMaps = {
      men: QUERY_MENS,
      women: QUERY_WOMENS,
      houseware:QUERY_HOUSEWARE,
      accessories: QUERY_ACCESSORY
    }

    const {data} = useSuspenseQuery(queryMaps[productType])
    console.log(data)


    return (
        <main>
            <div className='productHeader'>
                <p>test {`${productType}`}</p>
            </div>
            <div className='productLists'>

            </div>
        </main>
    )
}