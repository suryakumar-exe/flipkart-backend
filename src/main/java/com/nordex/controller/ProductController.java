package com.nordex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nordex.model.ProductModel;
import com.nordex.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {

	@Autowired
	private ProductService productservice;
	
	@PostMapping(value="/savepro")
	public Object saveEmp(@RequestBody ProductModel productmodel) {
		return(productservice.saveProduct(productmodel));
		
	}
	
	@GetMapping(path="/fetchpro")
	public List<ProductModel> fetchProduct(){
		
		return(productservice.fetchProducts());

		
	}
	@GetMapping(path="/search/{id}")
	public ProductModel fetchEmployee(@PathVariable int id){
		
		return(productservice.search(id));
		}
	
	@PutMapping(value="/updatepro")
	public Object updateEmp(@RequestBody ProductModel productmodel) {
		return(productservice.updateProduct(productmodel));
		
	}
	@DeleteMapping(value="/deletepro/{id}")
	public Object deleteEmp(@PathVariable int id) {
		return(productservice.deleteProduct(id));
		
	}
}
