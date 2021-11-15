package com.nordex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nordex.model.ProductModel;

public interface ProductRepo extends JpaRepository<ProductModel, Integer> {

}
