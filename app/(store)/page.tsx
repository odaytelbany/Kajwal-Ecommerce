import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories"; 
import BlackFridayBanner from "@/components/BlackFriday";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(products);
  return (
    <div className="bg-gray-100 pt-4">
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories}/>
      </div>
    </div>
  );
}
