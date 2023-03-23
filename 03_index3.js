// 📘 쿠키, 세션, 로컬스토리지
// 1) 1유형 가능성 (지금 현재 집 담보 )
// 2) 4월말 해도, 6번 지급이 될까? 
// 3) 서류 뽑아달라고 요청 


// 🟦 쿠키 
    // ex) 오늘 동안 안 보기 
    // 쿠키는 해당 pc 에 남아있다. 
    // 웹사이트를 방문하고, 사용자의 pc 에 기록할 간단한, 데이터
    // ⭐pc 에 저장⭐해두 었다가, '값을 호출' 해서 사용할 수 있다. 
    // 이건, 브라우저가 종료되어도 남아있다! ⭐⭐  
    
    // document 객체 안에 있다. 
    console.log(document.cookie);

    // 🔷 쿠키 구조 
    // 키와 값이 있다. 
    // '문자열' 로 저장 하면 된다. 

    // [예시]
        // 매개변수는 원하는 걸 찍으면 됨.
        function createCookie(name, value, time) {
            
            // name : 쿠키의 이름 (키)
            // value : 값
            
            // time : 유효시간 
                // 처음 필요한 것 : 쿠키의 지속시간 
                // 쿠키 썩으면 못 먹어. > so, 유효기간 까지 사용 가능한 시간을 정해야 함. 
                // 시간 날짜 연도 제공해주는 객체 만들 수 있음. ⭐⭐⭐⭐⭐⭐⭐⭐ 
                // 이 객체는 '생성자' 로 구현이 가능. 
                // date 로 만들면 됨. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

                let date = new Date();
                    // 이렇게 하면 객체가 만들어져!⭐⭐⭐⭐⭐ 
                    // 생성자 함수랑 비슷해
                    // '지금 시간(현재 시간)' 을 갖고 오는 객체를 만듦.

                console.log(date);
                    // 현재의 시간!!!!! 정보를 갖고 올 수 있는 객체임 

            // 1일 이후에 제거를 하고 싶다면? 
            let time = 1;

            // getTime : 현재 시간 - / 하루 이후의 시간
            console.log(date.getTime() + time * 24 * 60 * 60 * 1000 ); 
                // 밀리세컨즈 까지 해서 뜬다. 
                // 지금시간에서 + 로 얼마나 쿠키를 유지할지 구해서, 추가해줄 거 임. 
                // 이 시간이 '쿠키가 제거될 시간' (밀리 세컨즈로 구해놓음)
                // 이게 만료시간



            // 위에서 정한 시간을 객체에 넣어주기 ⭐⭐⭐ 
                // set get 
                // set : 변경할 때, 네이밍으로 많이 사용됨. 
                // get : 정보를 호출할 때
                    // 객체를 만들어서 정보를 가져오는 경우 
                    // 메소드는 get 을 많이 쓴다. 
                    // set 은 변경하겠구나! 
                    // setTime 메소드 : 이걸 활용해서 시간을 넣어줄 것 임 
        
                date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000)
                    // 이렇게 하면, '만료시간을 갖는 객체' 가 됨. 


            // 쿠키를 추가하는 방법 
                // 쿠키의명 = 값;expires + 만료일 + ";path=/" 
                    // ;path 는 경로 마다 만들어줄 수 있음. 
                    // ;path 는 경로에 대한 설정 
                    // ;path 는 쿠키에 대한 경로 

                // toUTCString() : 날짜 시간 표시 방법을 변경해준다.  
            console.log(date.toUTCString());
                // 이 형식으로 날짜 형태를 변경해서 > 넣어줘야 함. 
            document.cookie = name + "=" + value + ";expires"+date.toUTCString() + ";path=/";


        }
        

        // createCookie("이벤트 팝업", "true", "");/
        // [해석] 이름
        // 이렇게 하면, 키랑, 값이 생김 

        // 활용
            // true 면 > 팝업 안 띄워준다. 
            // true 없으면 > 팝업 띄운다. 
        // createCookie("팝업2", "두 번째 쿠키", "");

        console.log(document.cookie);


        // 🔷 쿠키 가져오기 (이건 야매!!!!!)
        function getCookie () {

            // = 제거하고 > '배열' 로 변경 
            let value = document.cookie.split("=");
            console.log(value)
            
            return value[1]; 
        }
        
        console.log( getCookie());


            // 이렇게 하면, 쿠키가 많이 들어가 있음. 
            // 문자열 제거할 예정 
                // 누르고 > delete 하면, 쿠키 사라짐. 

        // 쿠키 가져오는 과정은 문자열 
        // 맞는 걸 찾아서 꺼낸다. 


// 🟦 세션 
    // 브라우저가 '동작' 되는 동안, 남아있는 데이터 
    // 브라우저가 종료되면 > 끝남. 
    // 하나의 '상태' 같은 내용을 다룰 때 
        // ex) 로그인 되어 있는 상태
    // 브라우저 종료 시점까지 유지된다.  
    // 창을 끄면 > 없어진다.  



// 📘 쿠키 함수 작성하기 

    // 쿠키 get 함수 로 검색 
    
    // 정규식 
        // 패스워드에 어떤게 들어가야 한다. 
        // ex) 문자열에서 1이 포함되어야 한다는 등 
        // 4월말 취소, 5월 심사, 6월 3번 부터 수당 받게 이렇게 하고 싶음. 12월 7일 가능? 
        // 쿠키함수에서 일단 정규식 무시 
        // 정규식은 다들, 간단한 것만 하고, 찾고 하면 편해서, 찾아서 작성하는 경우가 많음. ⭐⭐⭐ 

    function getCookie2 (name) {
        // match 메소드 사용
            // 첫번째 인자 : res? : 정규식을 쓴다.
        let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)")

        console.log(value);
        return value ? value[2] : null;
            // 정규식 해서 값이 있으면 > value 로 들어간다. 

    }

    
    console.log(getCookie2("이벤트 팝업"))




// 🟦 쿠키 제거하는 함수
    // 이게 제일 쉬움 
    // 왜냐면, 쿠키를 상하게만 하면 됨. 
    // 날짜를 지나게만 하면 됨. 


    function deleteCookie (name) {

        // 강제로 시간이 지나게 함. > 쿠키 제거 
        document.cookie = name + "=; expires = Thu, 01 Jan 1999 00:00 GMT";
        console.log()

    }

    deleteCookie("이벤트 팝업");
    deleteCookie("이벤트 팝업2");
    
    console.log()


    // 정리 ⭐⭐ 
    // 1. 쿠키 만드는 거는 위에꺼 
    // 2. 쿠키 가져오는 건 get cookie 2 
    // 3. 삭제하는 건 deletecookie 


// 🟦 로컬 스토리지 
    // 브라우저에서 데이터를 저장하는 방법들 중 하나
    // 쿠키처럼 데이터를 저장하는 방법임. 

    // [쿠키, 세션과 다른 점] ⭐⭐
        // 만료일이 없음!!!!! 
        // 세션 : 브라우저를 끄면 > 사라짐
        // 쿠키 : 만료기간이 사라지면 > 사라짐 

    // 로컬스토리지 쉽다. 


    // 브라우저에서 기능을 사용해야 하니까, 'window 객체' 안에 있는 메소드를 사용! 
        // getItem 메소드 : 값을 호출할 때 사용한다. ⭐⭐ 
        // get!!!!!!!!!!! 이 붙었으니까! ⭐⭐⭐⭐⭐ 
        // getItem 매개변수 : 'key 값' 을 '문자열' 로 전달하면 -> '값' 을 뽑아줌 
        window.localStorage.getItem() 

        // setItem 메소드는 값을 키와 함께 저장시켜준다. 
        // key 가 있어야, 그에 맞는 데이터를 호출할 수 있을테니!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ⭐⭐⭐⭐⭐ 
        // window.localStorage.setTime("user_id" , "soo" );
            // 이렇게 되면 저장! 된 것 > 그 다음에 '주석' 처리 
            
        let a = window.localStorage.getItem("user_id"); 
            // set 으로 저장된 값을 받아와서 보기 
        console.log(a);


// 🟦 주의점 
    // 쿠키, 로컬스토리지, 이런 저장소에 민감한 값을 저장하면 안 된다. 
    // 지금 우리가 뜯어보기 편해! 
    


// 오늘 내용도 어려운게 정상 정상 
// 노력 노력
// 과제는 없고 복습 복습 





