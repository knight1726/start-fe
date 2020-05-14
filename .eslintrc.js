모듈 . 수출  =  {
    env : {
      브라우저 : true ,
      es6 : true ,
    } ,
    확장 : [ 'eslint : recommended' ,  'airbnb -base' ,  ' prettier ' ] ,
    글로벌 : {
      원자 : 'readonly' ,
      SharedArrayBuffer : 'readonly' ,
    } ,
    parserOptions : {
      ecmaVersion : 11 ,
      sourceType : 'module' ,
    } ,
    규칙 : {
      'no-unused-vars' : 'warn' ,
    } ,
  } ;