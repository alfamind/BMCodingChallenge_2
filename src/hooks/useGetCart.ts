import { useEffect, useState } from "react";

export const fakeCartData = {
    reservation: null,
    couponCode: null,
    totals: [
        {
            code: "subtotal",
            label: "Zwischensumme",
            value: 53.54,
            __typename: "CartTotals",
        },
        {
            code: "discount",
            label: "Rabatt (Käsespätzle für 3,99)",
            value: -0.78,
            __typename: "CartTotals",
        },
        {
            code: "grand_total",
            label: "Gesamt",
            value: 52.76,
            __typename: "CartTotals",
        },
    ],
    missingValue: 0,
    products: [
        {
            id: "Y2FydF9wcm9kdWN0LTEyODczMDAwMTE=",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTUyNQ==",
                position: 13,
                name: "Nahrungsmittel",
                __typename: "Category",
            },
            currentUnit: {
                id: "cHJvZHVjdFVuaXQtMTI4NzMwMDAxMV81Nw==",
                unitId: 57,
                name: "Packung",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/1287300011/0/43b840355cf917c3026e4c6cf9490a96.jpg",
            basePrice: 3.18,
            baseUnit: "1 kg",
            browserUrl: "birkel-no1-schwaebische-spaetzle-1287300011",
            availableQuantity: null,
            commentAllowed: false,
            comment: "",
            deposit: 0,
            name: "Birkel No.1 Schwäbische Spätzle",
            packing: "0.5kg Packung",
            price: 1.59,
            rowPrice: 1.59,
            discount: 0,
            sku: "1287300011",
            quantity: 1,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            restockDate: "2021-08-25T22:00:00.000Z",
        },
        {
            id: "Y2FydF9wcm9kdWN0LTM5NTAzMDU3MQ==",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTAwMA==",
                position: 1,
                name: "Obst & Gemüse",
                __typename: "Category",
            },
            currentUnit: {
                id: "cHJvZHVjdFVuaXQtMzk1MDMwNTcxXzU3",
                unitId: 57,
                name: "Packung",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/395030571/0/161890e1fd12261162336213157f550b.jpg",
            basePrice: 5.38,
            baseUnit: "1 kg",
            browserUrl: "cherry-rispentomaten-395030571",
            availableQuantity: null,
            commentAllowed: false,
            comment: "",
            deposit: 0,
            name: "Cherry Rispentomaten",
            packing: "500g Packung",
            price: 2.69,
            rowPrice: 5.38,
            discount: 0,
            sku: "395030571",
            quantity: 2,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            restockDate: "2021-08-24T22:00:00.000Z",
        },
        {
            id: "Y2FydF9wcm9kdWN0LTEzNDk1NzAwOTE=",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTM0OA==",
                position: 6,
                name: "Wein, Sekt & Spirituosen",
                __typename: "Category",
            },
            currentUnit: {
                id: "cHJvZHVjdFVuaXQtMTM0OTU3MDA5MV81Nw==",
                unitId: 57,
                name: "Flasche",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/1349570091/0/529c491ade9a5755251bf209244efdcb.jpg",
            basePrice: 29.93,
            baseUnit: "1 Liter",
            browserUrl: "jameson-irish-whiskey-1349570091",
            availableQuantity: null,
            commentAllowed: false,
            comment: "",
            deposit: 0,
            name: "Jameson Irish Whiskey",
            packing: "0.7l Flasche",
            price: 20.95,
            rowPrice: 41.9,
            discount: 0,
            sku: "1349570091",
            quantity: 2,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            restockDate: "2021-09-06T22:00:00.000Z",
        },
        {
            id: "Y2FydF9wcm9kdWN0LTM5NTAzOTQxMQ==",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTAwMA==",
                position: 1,
                name: "Obst & Gemüse",
                __typename: "Category",
            },
            currentUnit: {
                id: "cHJvZHVjdFVuaXQtMzk1MDM5NDExXzU3",
                unitId: 57,
                name: "Netz",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/395039411/0/417b5d9205ace755cd955e2e64cc08c6.jpg",
            basePrice: 1.99,
            baseUnit: "1 kg",
            browserUrl: "edeka-bio-zwiebeln-395039411",
            availableQuantity: null,
            commentAllowed: false,
            comment: "",
            deposit: 0,
            name: "EDEKA Bio Zwiebeln",
            packing: "750g Netz",
            price: 1.49,
            rowPrice: 2.98,
            discount: 0,
            sku: "395039411",
            quantity: 2,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            restockDate: "2021-08-24T22:00:00.000Z",
        },
        {
            id: "Y2FydF9wcm9kdWN0LTI3ODIyODUwMDAx",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTEzOQ==",
                position: 3,
                name: "Kühlregal",
                __typename: "Category",
            },
            currentUnit: {
                id: "cHJvZHVjdFVuaXQtMjc4MjI4NTAwMDFfNTc=",
                unitId: 57,
                name: "Packung",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/27822850001/0/c3a7e9b2c9ae02d6af1320e68579bf47.jpg",
            basePrice: 1.13,
            baseUnit: "100 g",
            browserUrl:
                "edeka-bio-gouda-gerieben-48-prozent-fett-i-tr-27822850001",
            availableQuantity: null,
            commentAllowed: false,
            comment: "",
            deposit: 0,
            name: "EDEKA Bio Gouda gerieben 48% Fett i. Tr.",
            packing: "150g Packung",
            price: 1.69,
            rowPrice: 1.69,
            discount: 0,
            sku: "27822850001",
            quantity: 1,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            restockDate: "2021-08-25T22:00:00.000Z",
        },
    ],
    __typename: "Cart",
    deutschlandCardInfo: {
        cardNumber: "1234567891",
        estimatedRevenue: 26,
        __typename: "DeutschlandCardInfo",
    },
};

function useGetCart() {
    const [cartInfo, setCartInfo] = useState<
        | {
              loading: true;
              data: undefined;
          }
        | {
              loading: false;
              data: typeof fakeCartData;
          }
    >({
        loading: true,
        data: undefined,
    });

    useEffect(() => {
        setTimeout(() => {
            setCartInfo({
                loading: false,
                data: fakeCartData,
            });
        }, 5000);
    }, []);

    return cartInfo;
}

export default useGetCart;
