import { CreateProductRequestBody } from "../controllers/Product";
import Product, { IProduct } from "../models/Product";

export interface UpdateProductRequestBody {
  productName?: string;
  productDescription?: string;
  price?: number;
  category?: string;
  stockQuantity?: number;
}
export const createProductService = async (data: CreateProductRequestBody) => {
  const newProduct = new Product(data);
  await newProduct.save();
  return newProduct;
};

export const getProductsService = async (filter: any) => {
  try {
    const products = await Product.find(filter);
    return products;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const products = await Product.findById(id);
    return products;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const updateProductService = async (
  productId: string,
  updatedData: UpdateProductRequestBody
): Promise<IProduct | null> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error("Error updating product");
  }
};

export const deleteProductService = async (productId: string) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw new Error("Error deleting product");
  }
};
