import React from "react";
import "./shop.css";
import Banner from "../../shared/banner/banner";
import BreadCrumb from "../../shared/breadCrumb/breadCrumb";
import axios from "axios";
import { Product } from "../../constants/product";
import ProductCard from "./product-card/productCard";
import Filters from "./filters/filters";
import Sorting from "./sorting/sorting";
import { sortingTypes } from "../../constants/sortingTypes";

export default function Shop({ searchedProduct }: any) {
  const links = ["Home", "Clothing", "Mens Clothing", "All Mens Clothing"];
  const [products, setProducts] = React.useState<Product[]>([]);
  const [defaultProducts, setDefaultProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [listOfTags, setListOfTags] = React.useState<string[]>([]);
  const [selectedTag, setSelectedTag] = React.useState<string>();
  const [sortType, setSortType] = React.useState("");
  function getAllTags(products: Product[]) {
    const tags = products.map((product: Product) => product.tag);
    setListOfTags(
      tags.filter(
        (tag_name: string, index: number) => tags.indexOf(tag_name) === index
      )
    );
    return;
  }
  React.useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json`
        );
        setLoading(false);
        const stringData: string = res.data;
        // Reason I am using this substr method
        // the response is returing and extra "," at the last array element
        // this causes the JSON to be not valid
        // thus used this approch as a work around.
        const refactoredData = stringData
          .substr(0, stringData.length - 3)
          .concat("]");
        getAllTags(JSON.parse(refactoredData));
        setProducts(JSON.parse(refactoredData));
        setDefaultProducts(JSON.parse(refactoredData));
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    getAllProducts();
  }, []);

  // Sort the products in descending order
  function sortDescending(leftParam: any, rightParam: any) {
    let comparison = 0;
    if (leftParam > rightParam) {
      comparison = -1;
    } else if (leftParam < rightParam) {
      comparison = 1;
    }
    return comparison;
  }

  // Sort the products in ascending order
  function sortAscending(leftParam: any, rightParam: any) {
    let comparison = 0;
    if (leftParam > rightParam) {
      comparison = 1;
    } else if (leftParam < rightParam) {
      comparison = -1;
    }
    return comparison;
  }

  // decide type of sort for products
  function applySorting(value: string) {
    const sortedArray = products.slice().sort((a: Product, b: Product) => {
      let leftParam = Number(a.price);
      let rightParam = Number(b.price);
      if (value === sortingTypes.ASCENDING) {
        return sortAscending(leftParam, rightParam);
      } else if (value === sortingTypes.DESCENDING) {
        return sortDescending(leftParam, rightParam);
      }
    });
    setProducts(sortedArray);
  }
  return (
    <>
      {loading ? (
        <div className="loading_wrapper">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="shopWrapper">
          <Banner />
          <div className="playground_wrapper">
            <BreadCrumb listOfLink={links} />
            <div className="heading_wrapper">
              <p className="heading">
                All Product
                <span className="length_of_products">
                  ({products.length} Products)
                </span>
              </p>
            </div>
            <div className="filter_and_sorting_wrapper">
              <Filters
                listOfTags={listOfTags}
                selectedTag={selectedTag}
                onSelectTag={(tag: string) => {
                  setSelectedTag(tag);
                }}
              />
              <div className="sorting">
                <Sorting
                  sortingType={sortType}
                  onChangeSortType={(value: string) => {
                    setSortType(value);
                    if (value === sortingTypes.DEFAULT) {
                      setProducts(defaultProducts);
                      return;
                    }
                    applySorting(value);
                  }}
                />
              </div>
            </div>
            <ProductCard
              products={products}
              searchedProduct={searchedProduct}
              selectedTag={selectedTag}
              canAddProductsToCart={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
