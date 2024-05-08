import React from "react";
import { ProductList } from "./Store/ProductList";
import Product from "./Component/Product";

export default function App() {

    return (<>
    <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
            {ProductList.map(({ id, title, image, description }) => {
                return <Product id={id} title={title} image={image} description={description} />

            })}
        </div>
        </div>
    </>)
}