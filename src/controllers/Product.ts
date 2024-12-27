import { Request, Response } from "express";
import Product from "../models/Product";
import {
  createProductService,
  deleteProductService,
  getProductsService,
  getSingleProduct,
  UpdateProductRequestBody,
  updateProductService,
} from "../services/Product";

export interface CreateProductRequestBody {
  productName: string;
  productDescription: string;
  price: number;
  category: string;
  stockQuantity: number;
}

export const createProduct = async (
  req: Request<{}, {}, CreateProductRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await createProductService(req.body);
    if (newProduct) {
      res.status(200).send({
        status: 200,
        message: "Product created successfully.",
        data: newProduct,
      });
    } else {
      res.status(200).send({
        status: 400,
        message: "Product cannot be created.",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error creating product:", error);

    res.status(500).send({
      status: 500,
      message: "Server error",
      data: error,
    });
  }
};

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name = "", category = "" } = req.query;

  const filter: any = {};

  filter.productName = { $regex: new RegExp(name as string, "i") };
  filter.category = { $regex: new RegExp(category as string, "i") };

  try {
    const products = await getProductsService(filter);
    if (products.length > 0) {
      res.status(200).send({
        status: 200,
        message: "Products fetched successfully.",
        data: products,
      });
    } else {
      res.status(200).send({
        status: 404,
        message: "No products found.",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).send({
      status: 500,
      message: "Server error",
      data: error,
    });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await getSingleProduct(req?.params?.id);
    if (product) {
      res.status(200).send({
        status: 200,
        message: "Products fetched successfully.",
        data: product,
      });
    } else {
      res.status(200).send({
        status: 404,
        message: "No products found.",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).send({
      status: 500,
      message: "Server error",
      data: error,
    });
  }
};

export const updateProduct = async (
  req: Request<{ id: string }, {}, UpdateProductRequestBody>,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await updateProductService(id, updatedData);
    if (updatedProduct) {
      res.status(200).send({
        status: 200,
        message: "Product updated successfully.",
        data: updatedProduct,
      });
    } else {
      res.status(200).send({
        status: 404,
        message: "Product not found.",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send({
      status: 500,
      message: "Server error",
      data: error,
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.id;

  try {
    const deletedProduct = await deleteProductService(productId);

    if (deletedProduct) {
      res.status(200).send({
        status: 200,
        message: "Product deleted successfully.",
        data: deletedProduct,
      });
    } else {
      res.status(200).send({
        status: 404,
        message: "Product not found.",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error deleting product:", error);

    res.status(500).send({
      status: 500,
      message: "Server error",
      data: error,
    });
  }
};
