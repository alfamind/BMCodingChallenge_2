import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
interface IProps {
    id: string;
    image?: string;
    name: string;
    basePrice: Number;
    baseUnit: string;
    type: "cart" | "products";
    quantity?: number;
    sku?: string;
    handleQuantityChange?: (qty: number, sku: string) => void;
}

const Tile: React.FC<IProps> = ({
    id,
    image,
    name,
    basePrice,
    baseUnit,
    type,
    quantity,
    sku,
    handleQuantityChange,
}) => {
    const imgWidth = "175";

    const [src, setSrc] = useState("https://via.placeholder.com/" + imgWidth);
    const [qty, setQty] = useState(quantity);

    useEffect(() => {
        image && setSrc(`https:${image}?imwidth=${imgWidth}`);
    }, [image]);

    const changeQty = (qty: number) => {
        if (!handleQuantityChange || !sku) return;
        setQty(qty);
        handleQuantityChange(qty, sku);
    };
    return (
        <li key={id} className={`${styles.gridItem} ${styles.tile}`}>
            <div className={styles.center}>
                <Image
                    src={src}
                    width={imgWidth}
                    height={imgWidth}
                    alt={name}
                    placeholder="blur"
                    blurDataURL={"https://via.placeholder.com/50"}
                    onError={() => setSrc("/imgerror.jpg")}
                />
            </div>
            <h4>{name}</h4>
            <p>
                <span className={styles.price}>
                    {basePrice.toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2,
                    })}
                </span>
                <small className={styles.small}>{"/ " + baseUnit}</small>
            </p>
            {type === "cart" && sku && quantity && (
                <>
                    Quantity:
                    <div>
                        <input
                            type="number"
                            min={1}
                            value={qty}
                            onChange={(e) => changeQty(Number(e.target.value))}
                        />
                    </div>
                </>
            )}
        </li>
    );
};

export default Tile;
