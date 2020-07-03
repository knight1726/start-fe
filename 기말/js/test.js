function modify_tab(tab_name) {
    if(tab_name == 'trending') {
        document.getElementById('trending_tab').className = "active";
        document.getElementById('issue_tab').className = "";
        document.getElementById('enter_tab').className = "";

        axios.request({
            method: 'GET',
            url: `http://1boon.kakao.com/ch/trending.json`,

            headers: {'Content-Type': 'application/json'},

            // params: {
            //     pagesize:10,
            //     page:1,
            //     callback:'done'
            // }
        }).then(response=>{
            var data = new Array();
            var data = response;

            console.log(response);
        })
    } else if(tab_name == 'issue') {
        document.getElementById('trending_tab').className = "";
        document.getElementById('issue_tab').className = "active";
        document.getElementById('enter_tab').className = "";

        axios.request({
            method: 'GET',
            url: `http://1boon.kakao.com/ch/issue.json`,

            headers: {'Content-Type': 'application/json'},
        }).then(response=>{
            console.log(response);
        })
    } else if(tab_name == 'enter') {
        document.getElementById('trending_tab').className = "";
        document.getElementById('issue_tab').className = "";
        document.getElementById('enter_tab').className = "active";

        axios.request({
            method: 'GET',
            url: `http://1boon.kakao.com/ch/enter.json`,

            headers: {'Content-Type': 'application/json'},
        }).then(response=>{
            console.log(response);
        })
    }
}

// function show_page(){
//     var pagesize = ;
//     var page = ;
//     var callback = jsonp callback;
// }