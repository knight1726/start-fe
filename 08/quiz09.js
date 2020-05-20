const  $ url  =  document . getElementById ( 'url' ) ;
const  $ btn  =  document . getElementById ( 'btn' ) ;
const  $ log  =  document . getElementById ( 'log' ) ;

함수  printlog ( str )  {
  $ 로그 . 값  =  str ;
}
함수  getsource ( 결과 )  {
  결과 . 텍스트 ( ) . 그런 다음 ( printlog ) ;
}
 geterror 함수 ( 오류 )  {
  printlog ( 오류 ) ;
}

함수  fetchurl ( )  {
  const  url  =  $ url . 가치 ;
  printlog ( '' ) ;

  if  ( ! url )  {
    // eslint-disable-next-line 경고 없음
    alert ( 'url을 입력하세요' ) ;
  }  else  {
    페치 ( url ) . 그런 다음 ( getsource ) . 캐치 ( geterror ) ;
  }
}

$ btn . addEventListener ( 'click' ,  fetchurl ) ;
$ URL . addEventListener ( 'keypress' ,  ( e )  =>  {
  경우  ( 예 . keyCode에  ===  13 )  {
    fetchurl ( ) ;
  }
} ) ;