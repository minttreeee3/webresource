// 오늘 날짜 확인 -1 : 어제날짜를 화면에 기본으로 보여주기

// 년,월,일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

function init() {
  // 날짜 객체 생성 (자바스크립트 내장객체 Date)
  let now = new Date();
  // 년
  let year = now.getFullYear();
  // 월 (0부터 시작함)
  let month = now.getMonth() + 1;
  // 일-1
  let day = now.getDate() - 1;

  txtYear.value = year;

  // 한자릿수를 01,02..로 넣어놨는데 .getMonth()랑 .getDate()는 1,2,3..으로 출력하기때문에 if문으로 0을 붙여줘야함
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
}

function show(movieCd) {
  console.log("movieCd ", movieCd);

  // 영화 상세정보 요청하기
  let url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";

  url += movieCd;

  console.log("영화상세정보 ", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 없습니다");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);

      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      // movieInfo에서 movieNm, moviNmEn, showTm, directors, actors 추출후 box3안에 보여주기
      let str = "<ul>";
      str += "<li>영화제목 : " + movieInfo.movieNm + "</li>";
      str += "<li>영어제목 : " + movieInfo.movieNmEn + "</li>";
      str += "<li>상영시간 : " + movieInfo.showTm + "분 </li>";

      // 감독 : 가끔 비어있는 경우도 있어서
      if (movieInfo.directors.length > 0) {
        str += "<li>감독 : " + movieInfo.directors[0].peopleNm + "</li>";
      } else {
        str += "<li>감독 : 없음 </li>";
      }

      // 출연배우 : 전부 추출 (배열이라서 for), 마지막 사람한텐 ,안들어가게 하려고 if-else
      const length = movieInfo.actors.length;
      let peopleNm = "";
      movieInfo.actors.forEach((actor, idx) => {
        if (idx == length - 1) {
          peopleNm += actor.peopleNm;
        } else {
          peopleNm += actor.peopleNm + ", ";
        }
      });
      str += "<li>출연배우 : " + peopleNm + "</li>";
      str += "</ul>";

      document.querySelector(".box3").innerHTML = str;
    })
    .catch((err) => {});
}

init();

// 확인 버튼 클릭시 전일자 영화 순위 가져오기
document.querySelector("#btn1").addEventListener("click", () => {
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";

  // 사용자가 선택한 날짜 가져오기
  let date = txtYear.value + selMon.value + selDay.value;
  // url과 연결
  url += date;
  // console.log() 확인
  console.log(url);

  // 데이터 요청 ==> ajax
  // fetch
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소를 확인해 주세요");
      }
      // 서버에서 오는 데이터는 json ==> 스크립트 객체 처리
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // dailyBoxOfficeList 가져오기  -영진위 데이터에서 키값 찾아서...
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      // data에서 rank(rankInten) : movieNm 추출  -영진위에서 제공해주는 응답필드명
      // mavieCd 추출 (영화 상세정보 요청하는 데 필요)
      let str = ""; //변수는 for문 밖에 선언해야됨
      dailyBoxOfficeList.forEach((element) => {
        // 순위
        str += element.rank + " 위";

        // 전일자 증감
        const rankInten = parseInt(element.rankInten);
        if (rankInten > 0) str += "(▲";
        else if (rankInten < 0) str += "(▼";
        else str += "(";

        str += rankInten + ") : ";

        // 영화명
        str +=
          "<a href='#' onclick='javascript:show(" +
          element.movieCd +
          ")'>" +
          element.movieNm +
          "</a><br>";
      });
      // 박스 영역 안에 보여주기
      document.querySelector("#msg").innerHTML = str;
    })
    .catch((err) => {});
});
