package com.nordex.serviceimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nordex.model.ProductModel;
import com.nordex.repository.ProductRepo;
import com.nordex.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepo productrepo;
	
	@Override
	@Transactional
	public Object saveProduct(ProductModel productmodel) {
		// TODO Auto-generated method stub
		Map<String,Object> map = new HashMap<String,Object>();
		if(productmodel.getPname().isEmpty()) {
			map.put("status","Error");
			map.put("Msg","Employee name not valid");
		}
		else 
		{
			productrepo.save(productmodel);
			map.put("status","Success");
			map.put("Msg","Employee Added successfully");
		}
 		return map;
	}

	@Override
	@Transactional
	public List<ProductModel> fetchProducts() {
		// TODO Auto-generated method stub
		return productrepo.findAll();
	}

	@Override
	@Transactional
	public ProductModel search(int id) {
		// TODO Auto-generated method stub
		return productrepo.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Object updateProduct(ProductModel productmodel) {
		// TODO Auto-generated method stub
		Map<String,Object> map = new HashMap<String,Object>();
		if(productmodel.getPname().isEmpty()) {	
			map.put("status","Error");
			map.put("Msg","Employee name not valid");
		}else {
			productrepo.saveAndFlush(productmodel);
			map.put("status","Success");
			map.put("Msg","Employee updated successfully");
		}
 		return map;
	}

	@Override
	@Transactional
	public Object deleteProduct(int id) {
		// TODO Auto-generated method stub
		Map<String,Object> map = new HashMap<String,Object>();
		if(id<=0) {
			map.put("status","Error");
			map.put("Msg","Employee id not valid");
		}else {

			productrepo.deleteById(id);;
			map.put("status","Success");
			map.put("Msg","Employee deleted successfully");
		}
 		return map;
	}

	

}
