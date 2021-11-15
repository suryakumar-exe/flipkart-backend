package com.nordex.service;

import java.util.List;


import com.nordex.model.ProductModel;

public interface ProductService {
	public Object saveProduct(ProductModel productmodel);
	public List<ProductModel> fetchProducts();
	public ProductModel search(int id);
	public Object updateProduct(ProductModel productmodel);
	public Object deleteProduct(int id);
}
