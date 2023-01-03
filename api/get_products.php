<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 

    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);
  if($postjson['aksi'] == "get_products_vendor"){
    
    $products = mysqli_query($mysqli, "SELECT * FROM products ");

    $data = array();

    while($rows = mysqli_fetch_array($products)){
      $data[] = array(
        'product_id' => $rows['product_id'],
        'store_id' => $rows['store_id'],
        'product_image' => $rows['product_image'],
        'product_name' =>$rows['product_name'],
        'product_desc' =>$rows['product_desc'],
        'price' => $rows['price'],
        'var_price' => $rows['var_price'],
        'stock' => $rows['stock'],
        'product_condition' => $rows['product_condition']
        );
    }
  
   
      if($products){
        $result = json_encode(array('success' => true, 'result' => $data));
          echo $result;
      }else{
        $result = json_encode(array('success' => false));
          echo $result;
      }
      
      
  }
  if($postjson['aksi'] == "get_products"){
    
    $products = mysqli_query($mysqli, "SELECT * FROM products WHERE category='Clothes'");

    $data = array();

    while($rows = mysqli_fetch_array($products)){
      $data[] = array(
        'product_id' => $rows['product_id'],
        'store_id' => $rows['store_id'],
        'product_image' => $rows['product_image'],
        'product_name' =>$rows['product_name'],
        'product_desc' =>$rows['product_desc'],
        'price' => $rows['price'],
        'var_price' => $rows['var_price'],
        'stock' => $rows['stock'],
        'product_condition' => $rows['product_condition']
        );
    }
  
   
      if($products){
        $result = json_encode(array('success' => true, 'result' => $data));
          echo $result;
      }else{
        $result = json_encode(array('success' => false));
          echo $result;
      }
      
      
  }
 if($postjson['aksi'] == "get_products_list_2"){
    
  $products = mysqli_query($mysqli, "SELECT * FROM `products` WHERE category='Canned Food' OR category = 'Instant Food' OR category = 'Dry Food'");

  $data = array();

  while($rows = mysqli_fetch_array($products)){
    $data[] = array(
      'product_id' => $rows['product_id'],
      'store_id' => $rows['store_id'],
      'product_image' => $rows['product_image'],
      'product_name' =>$rows['product_name'],
      'product_desc' =>$rows['product_desc'],
      'price' => $rows['price'],
      'var_price' => $rows['var_price'],
      'stock' => $rows['stock'],
      'product_condition' => $rows['product_condition']
      );
  }
 
 
  if($products){
    $result = json_encode(array('success' => true, 'result' => $data));
      echo $result;
  }else{
    $result = json_encode(array('success' => false));
      echo $result;
  }
}

if($postjson['aksi'] == "get_products_list_3"){
    
  $products = mysqli_query($mysqli, "SELECT * FROM `products` WHERE category='School Supply'");

  $data = array();

  while($rows = mysqli_fetch_array($products)){
    $data[] = array(
      'product_id' => $rows['product_id'],
      'store_id' => $rows['store_id'],
      'product_image' => $rows['product_image'],
      'product_name' =>$rows['product_name'],
      'product_desc' =>$rows['product_desc'],
      'price' => $rows['price'],
      'var_price' => $rows['var_price'],
      'stock' => $rows['stock'],
      'product_condition' => $rows['product_condition']
      );
  }
 
 
  if($products){
    $result = json_encode(array('success' => true, 'result' => $data));
      echo $result;
  }else{
    $result = json_encode(array('success' => false));
      echo $result;
  }
}
