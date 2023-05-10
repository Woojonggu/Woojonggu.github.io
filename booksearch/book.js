
let page = 1;
const query = document.querySelector(".query");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== ""){
        page = 1;
        searchRequest(query.value, page);
    }
    query.value = "";
});


function searchRequest(query, page){
    console.log("query :", query);
    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK a9e872ac4ac2d57c03971f85979418db"
        },
    })
        .done((response) => {
            console.log(response);
            // 책 목록

        });
}