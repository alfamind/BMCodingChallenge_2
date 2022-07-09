import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import GridList from "../src/components/GridList";
import SearchBox from "../src/components/SearchBox";
import Tile from "../src/components/Tile";
import useGetCart from "../src/hooks/useGetCart";
import useGetProducts from "../src/hooks/useGetProducts";
import printItemscount from "../src/utils/printItemsCount";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const cart = useGetCart();
    const products = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState<typeof products>();
    useEffect(() => {
        products && setFilteredProducts(products);
    }, [products]);

    const handleQuantityChange = (qty: number, sku: string) => {
        if (cart.data?.products === undefined) return;
        for (const item of cart.data?.products) {
            if (item.sku === sku) {
                item.quantity = qty;
                break;
            }
        }
    };
    const handleKeywordChange = (keyword: string) => {
        if (keyword.trim().length < 1) {
            setFilteredProducts(products);
            return;
        }
        const filterRes =
            products.data &&
            products.data.edges.filter(
                (product) =>
                    product.node.name
                        .toLowerCase()
                        .includes(keyword.toLowerCase()) && product
            );
        products.loading === false &&
            setFilteredProducts({
                ...products,
                data: { ...products.data, edges: filterRes ? filterRes : [] },
            });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>

            <h1>Cart </h1>
            {cart.loading && <h3>Loading...</h3>}
            <div className={styles.center}>
                {cart.data?.products &&
                    printItemscount(cart.data?.products.length)}
            </div>
            {cart.data?.products && (
                <GridList>
                    {cart.data?.products.map((item) => (
                        <Tile
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            basePrice={item.basePrice}
                            baseUnit={item.baseUnit}
                            image={item.image}
                            quantity={item.quantity}
                            sku={item.sku}
                            handleQuantityChange={handleQuantityChange}
                            type="cart"
                        />
                    ))}
                </GridList>
            )}
            <h1>Products</h1>
            <div className={styles.center}>
                {products.data?.pageInfo &&
                    printItemscount(products.data?.pageInfo.totalCount)}
            </div>
            <SearchBox handleKeywordChange={handleKeywordChange} />
            {products.loading && <h3>Loading...</h3>}
            {filteredProducts && filteredProducts.data?.edges && (
                <GridList>
                    {filteredProducts.data?.edges.map((item) => (
                        <Tile
                            key={item.node.id}
                            id={item.node.id}
                            name={item.node.name}
                            basePrice={item.node.prices.basePrice}
                            baseUnit={item.node.prices.baseUnit}
                            image={item.node.image}
                            type="products"
                        />
                    ))}
                </GridList>
            )}
            {filteredProducts && filteredProducts.data?.edges.length === 0 && (
                <h4>No products found for your search.</h4>
            )}
        </div>
    );
};
export default Home;
