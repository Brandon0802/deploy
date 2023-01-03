<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
    header('Content-Type: application/json; charset=UTF-8'); 
 
    include "config.php";
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['aksi'] == "delete_product"){
    
    $prod_id = $postjson['product_id'];
    $prod_name = $postjson['prod_name'];

    $delete1=mysqli_query($mysqli, "DELETE FROM `products` WHERE product_id='$prod_id' ");
    $delete2=mysqli_query($mysqli, "DELETE FROM `product_details` WHERE product_id='$prod_name' ");
    $delete3=mysqli_query($mysqli, "DELETE FROM `variation` WHERE product_id='$prod_id' ");
    $delete4=mysqli_query($mysqli, "DELETE FROM `variation_2` WHERE product_id='$prod_id' ");

    if($delete1){
      $message = json_encode(array('success' =>true, 'msg' => 'Product Deleted'));
    }else{
      $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
    }

    echo $message;
    
    





}else if($postjson['aksi'] == "delete_user"){
    
  $id = $postjson['id'];

  $delete1=mysqli_query($mysqli, "DELETE FROM `user_account` WHERE `user_id`='$id' ");
  $delete2=mysqli_query($mysqli, "DELETE FROM `vendor_account` WHERE `user_id`='$id' ");
  $delete3=mysqli_query($mysqli, "DELETE FROM `consumer_account` WHERE `user_id`='$id' ");

  if($delete1){
    $message = json_encode(array('success' =>true, 'msg' => 'Product Deleted'));
  }else{
    $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
  }

  echo $message;
}else if($postjson['aksi'] == "view"){
    
  $id = $postjson['id'];

  $gettype=mysqli_fetch_array(mysqli_query($mysqli, "SELECT user_type FROM user_account WHERE `user_id`='$id'"));
  $type=$gettype['user_type'];
  if($type=='Consumer'){
    $getuser=mysqli_fetch_array(mysqli_query($mysqli, "SELECT c.first_name, c.last_name, b.barangay_name, c.contact_number  FROM consumer_account as c, barangay as b WHERE `user_id`='$id' AND c.barangay_id=b.barangay_id"));
    $userdata= array(
      'first_name'=>$getuser['first_name'],
      'last_name'=>$getuser['last_name'],
      'barangay_name'=>$getuser['barangay_name'],
      'contact_number'=>$getuser['contact_number']
    );
  }else if($type=='Driver'){
    $getuser=mysqli_fetch_array(mysqli_query($mysqli, "SELECT d.first_name, d.last_name, d.barangay_name, d.contact_number  FROM driver_account as d, barangay as b WHERE `user_id`='$id' AND c.barangay_id=b.barangay_id"));
    $userdata= array(
      'first_name'=>$getuser['first_name'],
      'last_name'=>$getuser['last_name'],
      'barangay_name'=>$getuser['barangay_name'],
      'contact_number'=>$getuser['contact_number']
    );
  }else{
    $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
  }
  

  if($gettype){
    $message = json_encode(array('success' =>true, 'msg' => 'Show', 'res' => $userdata));
  }else{
    $message = json_encode(array('success' =>false, 'msg' => 'Failed'));
  }

  echo $message;
}