function isTouching (objectX, objectY) {
    if((objectX.x-objectY.x <=( objectX.width/2+objectY.width/2))&&
    (objectY.x-objectX.x <=( objectY.width/2+objectX.width/2))&&
    (objectX.y-objectY.y <=(objectX.height/2+objectY.height/2))&&
    (objectY.y-objectX.y <=( objectY.height/2+objectX.height/2))){
      return true ;
  }else{
   return false;
  }
  }
  
  function bounceOff (object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
  
  }
