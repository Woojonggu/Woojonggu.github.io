// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료


// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ

// ajax
// ㄴ fetch() 로드 구현 가능 (일부 브라우저 똔느 하위 버전의 스크립트에서 호환 x)
// -> jQuery.ajax() 메소드를 활용
// 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
let page = 1;

const query = document.querySelector(".query");


const searchBox = document.querySelector(".search-box");


searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== ""){
        page = 1;
        searchRequest(query.value, page);
    }
});

function searchRequest(query){
    console.log("query : ", query);


    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 5a06284f7d03a472de82b12ac51ca3d8"
        },
    })
        .done(response => {

            $('#container').append(`
         <div class="result-card">
            <img class="book-img" src="/book.png">
            <h4 class = "book-title">도서제목</h4>
            <p class = "book-description">도서상세정보</p>
            <span class="price">1000원</span>
            <p class="book-info">
                <span class="author">저자</span>|<span class="publisher">출판사</span>
            </p>
        </div>
        `)
            // container 안에


            /*

            */

            // 새로 생성 및 구성 완료한 result-card 요소를 추가

            // 1. 붙잡아올 요소를 변수에 담아준다
            const container = document.querySelector("container");

            const card = document.querySelector("card")

    });
}