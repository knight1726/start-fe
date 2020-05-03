const  $bug  = document .getElementById ("bug");
const  $box  = document .querySelector (".box");
let  $point  = document .getElementById ("point");
let  $life  = document .getElementById ("life");

let  point  = 0 ;
let  life  = 10 ;
let  clicked  = false ;

    $bug .addEventListener('click', e  => {
        point  ++;
        $point .innerHTML  = point ;
        });

    $box .addEventListener('click', e  => {
        life  --;
        $life .innerHTML  = life ;
        if (life ==0 ){
            alert ("Game Over");
}
    })
