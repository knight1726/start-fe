모듈 . 수출  =  {
    mode : '없음' ,
    // 모드 : 'development',
    entry : './src/main.js' ,
    출력 : {
      파일명 : 'app.js' ,
      경로 : ` $ { __dirname } / dist` ,
    } ,
    devServer : {
      contentBase : './dist' ,
    } ,
    플러그인 : [
      새로운  HtmlWebpackPlugin ( {
        템플릿 : './src/index.html' ,
      } ) ,
    ] ,
  } ;