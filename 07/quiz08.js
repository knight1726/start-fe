const  $ min  =  document . getElementById ( 'min' ) ;
const  $ max  =  document . getElementById ( 'max' ) ;
const  $ btn  =  document . getElementById ( 'btn' ) ;
const  $ box  =  document . getElementById ( 'box' ) ;

 randomnum  =  0으로 ;
하자  boxnum  =  0 ;

 getrandomnum ( )  함수 {
  CONST 분=에서는 parseInt ( $ 분 . 값 ,  10 ) ;
  CONST 최대=에서는 parseInt ( $ 맥스 . 값 ,  10 ) ;
  randomnum=수학 . 층 ( 수학 . 랜덤 ( ) * ( 최대  -  최소  +  1 ) )  +  분 ;
   난수를 반환 ;
}

$ btn.addEventListener ('click', ( )  =>  {
  getrandomnum ( ) ;
  boxnum=randomnum-40;

  const 타이머=setInterval ( ( )  =>  {
    if  (난수!==boxnum)  {
      박스 넘+=1 ;
      $btn . 비활성화 됨  =  true ;
      $box . innerHTML  =  boxnum ;
    }else{
      $btn . 비활성화=거짓 ;
      clearInterval (타이머) ;
    }
  },20);
});