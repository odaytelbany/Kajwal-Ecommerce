import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductBySlug = async (slug: string) => {
    const PRODUCT_BY_ID_QUERY = defineQuery(`
        *[
            _type == "product"
            && slug.current == $slug
        ] | order(name asc) [0]
    `);

    try {
        const products = await sanityFetch({
            query: PRODUCT_BY_ID_QUERY,
            params: {
                slug
            }
        })
        return products.data || null;
    } catch (error) {
        console.log("ERROR fetshing product by id: ", error)
        return null;
    }
}