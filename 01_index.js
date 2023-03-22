// 📘 DOM 내용 추가

// 🟦 'DOM 트리'
    // 우리가 사용하는 p, h1, div 태그들을, 위계질서에 맞게 tree 형태로 그린것을, DOM 트리, 라고 함
    // 'DOM 트리' 라고 함 ⭐⭐⭐

    // DOM 트리의 기본 단위는 '노드' ⭐⭐⭐⭐⭐ 
        // ex) 태그 하나면, 노드 하나❓❓ 
    

// 🟦 트리(노드) 활용해서 태그 추가하기 
    // 문자열 사이에 '태그' 를 넣어서, 태그를 추가하는 방법
    // document.querySelector('.add_class').innerHTML = "<div> 태그 내용</div>"

    // 노드에 추가하는 방법

        // 1. 태그 생성
        // ex) div 태그를 생성
        // createElement : 태그 생성 메소드 ⭐⭐⭐
        // createElement(태그명)
        let _div = document.createElement('div')    
            // 이렇게 만든 div 태그를 _div 에 담음 
            // 여기까지는 생성해서 > _div 변수에 담았고 > 생성된 태그는 현재, 메모리 공간에 있음. ⭐⭐
            // 메모리 공간에만 있고, 트리에 추가가 안 된 상태 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            // 이 상태를 잘 이해해야 함 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            console.log(_div)
            // 지금은 '메모리 공간' 에만 있을 뿐, 화면에 없음. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            // 이제, '추가하고 싶은 위치' 에 추가해줄 수 있어야 함. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

        // 2. 생성한 태그에 내용 넣기 
        _div.innerHTML = "<p> 내용이 </p> <div> 없니? </div>";

        // 3. 생성한 태그에 '클래스' 도 추가
        _div.classList.add("net_tag")
            

        // 4. 메모리에 있는걸 > 원하는 위치(트리)에 추가 하기 
            // append 메소드 사용 > body 에 추가 ⭐⭐⭐ 
            document.body.append(_div); 
                // append 메소드를 쓰면 > 원하는 위치에 태그를 추가 할 수 있음. 
    
            setTimeout(() => {
                document.querySelector('.add_class').append(_div);
                // body 안 add_class 클래스 안으로 들어감
            }, 2000);
                // 2초 뒤에 추가하게 하기 
                
            // 태그참조.append(생성한 태그) : 태그 참고하고 > 태그 내용의 안쪽으로, 생성한 태그가 추가 된다. 


    // 🟦 innerHTML 과 append 비교 
        // innerHTML 은 문자로 들어가서 '보안' 이 취약 
        // append 로 추가하면, DOM 트리의 노드, 이기 때문에, 보안상 문제 없음. 

        // append 로 하면, '태그 작업을 세분화' 할 수 있음. 
        
    
    // 🟦 innerText
        // 태그의 내용 확인
        console.log(_div.innerHTML);
            // `<p> 내용이 </p> <div> 없니? </div>` 이렇게 뜬다. 
            // 이때, 태그의 내용에서 문자만 쓰고 싶으면? ⭐⭐⭐
            // innerText 사용 
            // 태그 사이의 문자만! 가져오기⭐⭐⭐

        console.log(_div.innerText);
            // [결과물] `내용이 없니?` 이렇게 나옴 


    // 🟦 사용 예제
        // 버튼 태그 생성
        let _button = document.createElement('button');
            // 이놈은 '하나의 태그'!!! ⭐⭐⭐⭐⭐⭐⭐⭐⭐라고 생각 
            // 이제 여기에 기능을 넣을 수 있는거야. 
        // 버튼에 '내용' 추가
        _button.innerHTML = "눌러봐"
        // 원하는 '위치'에 추가 해보기! 
        document.body.append(_button);


    // 🟦 태그를 제거해보기
        // 클릭했을 때, div 태그 지우기 ⭐⭐⭐
        _button.onclick = function(){
            // 1️⃣ remove() 메소드
            // _div.remove(); ⭐⭐⭐⭐⭐⭐⭐⭐
                // remove() 메소드가 div 태그를 제거 해준다.
                // '원하는 태그'를 제거할 수 있음. ⭐⭐⭐ 
                // `지우고싶은태그.remove()` 라고 쓰면, 그 태그를 지울 수 있음. ⭐⭐⭐⭐⭐
                
                // 2️⃣ removeChild ❓❓❓ 뭐가 다르지? 
                // '태그의 자식 태그' 도 제거 할 수 있음. 
                // `removeChild` 메소드를 사용 ⭐⭐⭐
                // let _div2 = document.querySelector('');
                console.log(_div)
                // document.body.removeChild(_div); 
                // _div 태그를 body 태그에서 찾아서 > 제거한다. ❓❓❓❓❓ 
                // remove 랑 뭐가 다르지? 
                    // removeChild 는 원하는 태그를 지우려면 1) 원하는 태그 2) 그 태그가 속한 상위 태그 중 하나를 찝어줘야 함⭐⭐⭐
                    // document.상위태그중하나(굳이body아니어도됨).removeChild(지우고싶은태그)⭐⭐⭐⭐⭐⭐
                
            }

    document.body.append(_button);



// 🟦 이벤트를 추가하는 법 

    // 1. onclick(키 값) 에 함수를 직접 대입해서 추가하는 방법
        // 이건, 함수를 덮어씌우는 방법.
        
    // 2. addEventListener()
        // 1) 첫 번째 방법에서 "on" 만 빼면 된다. 
        // ex) onscroll -> on 빼고 -> scroll
        // addEventListener 메소드의 매개변수로 '구독할 이벤트 이름'

        // 2) 두 번째 매개변수로 실행시킬 함수 ⭐⭐⭐⭐⭐
    _button.addEventListener("click", function() {
        console.log("나 클릭 구독중. event listener 로 듣는중")
    })
    // [해석] 클릭되었을 때 > 이 함수를 실행시켜줘

    
    _button.addEventListener("click", function() {
        console.log("오잉, 나도 구독중!!, 하나의 버튼에 2개 달아도 다 뜬다!")
    })


// 🔵 [이벤트 누적 vs 덮어쓰기] ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        // addEventListener 메소드는 이벤트를 '누적' 시킬 수 있다. 
            // ex) ("오잉, 나도 구독중!!, 하나의 버튼에 2개 달아도 다 뜬다!")

        // 다만, onclick 은 이벤트를 '덮어쓴다.' ⭐⭐⭐⭐⭐  


    // [onclick 이벤트 '덮어쓰기' 예시] ⭐⭐
    _button.onclick = function() {
        console.log('나 onclick 이벤트');
    }
    console.log(_button.onclick)

    _button.onclick = function() {
        console.log('나 onclick 이벤트2');
    }

    console.log(_button.onclick)



// 🟦 이벤트 종류들 좀 더 알아보기 

// 🔷 load : 페이지와 기타 요소들, 그릴 준비, 로딩이 끝났을 때     
    // 1. ⭐on 이 붙으면 > 어트리뷰트 방식 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        // ex) div onclick="" / 이게 어트리뷰트 방식 
        // 태그안에서 함수를 넣는거
    window.onload = function() {

    }

    // 2. 직접 함수 추가 
        // addEventListener("이벤트의 타입", 함수의 내용) 을 사용해서!!

        window.addEventListener('load', function() {
            // load 이벤트가 실행되면 > 해당 내용 실행

        })


// 🔷 onresize : 브라우저의 창 크기가 바귀면, 실행되는 이벤트

        // 1. 어트리뷰트 방식
        window.onresize = function() {

            console.log("창 사이즈 변환")
        }

        // 2. 함수 방식
            // on 만 빼고!!!!!!!!!!!!!!! ⭐⭐⭐⭐⭐
        window.addEventListener("resize", function() {

        })


// 🔷 onscroll 이벤트 : 사용자가, '태그' 나 '페이지' 에서, '스크롤' 했을 때 
        
    // 스크롤 값이 없으면 동작하지 않는다. ⭐⭐⭐⭐⭐

        // 우리가 생성한 _div 태그ㅔ서 scroll 이벤트 구독
        _div.onscroll = function() {
            // 스크롤 이벤트가 일어나면, 추가할 기능
            console.log("나, '스크롤' 되고 있니? ")
        }
        // [해석]
            // _div 태그에서 스크롤이 일어나기 때문에 > 값이 찍힌다. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            // body 태그에서 스크롤이 일어나면 > 안 찍힌다. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐


        // body 태그에서 scroll 벤트가 일어날 때
        document.body.onscroll = function() {
        }

        // [시사점]
            // 그 태그!(_div) 에서 스크롤 이벤트가 발생할 때 > 찍힌다. 실행된다. 

        

// 🟦 키보드 이벤트들

// 🔷 onkeydown : 사용자가, '키보드' 를 눌렀을 때, '누르자마자'(누르고 뗀게 아님⭐⭐⭐)!!! 

    window.onkeydown = function() {
        console.log("나 키 누르자마자! 떼는게 아니라, 누르자마자!!! 이게 뜬다.");
    }


// 🔷 onekeyup : 사용자가, 키보드를, 누르고 뗐을 때! (계속누르고 있다가, 떼는 순간, 발생하는 이벤트)
window.onkeyup = function() {
    console.log("키보드를 누르다가, 쉭! 땠어!!!!!")
}


// 🔷 onkeypress : 키보드를 누르고 있는 동안, 계속 실행, 된다. 
    //  keydown 으로 대체 될 수 있음. / 사용을 잘 안하게 될 것
    // 이거 쓸거면, keydown ⭐⭐⭐⭐⭐ 쓰면 됨. 
    // 다만, ⭐ 1) onkeydown 하는 순간 동작할 기능 하나 2) 누르고 있는 동안 발생할 기능, 이 구분될 때! 필요  

    window.onkeypress = function() {
    console.log("키보드를 누르고 있는 동안! 누르누르누르르")
    }




// 🟦 마우스 이벤트 

// 🔷 click : 사용자가, 해당 태그를 클릭 했을 때, 발생하는 이벤트 
    window.onclick = function() {
        console.log("나 클릭 되었니, onclick 인데 지금👐")
    }

// 🔷 dbclick : 더블클릭 했을 때, 발생하는 이벤트
    window.ondblclick = function() {
        console.log('지금 더블클릭 한거 체크 중, dbclick🎏')
    }

// 🔷 mousedown : 마우스를 누르자마자, 실행되는 이벤트 / 클릭이 아니라, 그냥 누르자 마자. 
    window.onmousedown = function() {
        console.log("마우스를 누르자 마자, 클릭이 아니라, 누르자 마자, mousedown🕵️‍♂️")
    }

// 🔷 mouseup : 마우스를 누르다가, 땠을 때, 실행되는 이벤트 
    window.onmouseup = function() {
        console.log("마우스 키 업 / 마우스를 눌렀다가 땠을 때 / onmouseup ✍ ")
    }

    // ⭐⭐ mousedown, mouseup! 
        // 마우스 키를 누르고 이동한 뒤, 키를 땠을 때, 좌표로 계산해서 동작해야 하는 기능을 만들 때!⭐⭐⭐
        // slide 구현 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        // slide 의 민감도를 구현할 수 있어 ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 

// 🔷 mousemove : 마우스가 태그 위에서, 이동되는 동안
    window.onmousemove = function() {
        console.log("마우스가 지금 이동중이에요~👏 onmousemove~")
    }
        // 여기에 파티클 붙이면 재밌겠다 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        
    // _div.onmousemove = function() {
    //     console.log("마우스가 지금 이동중이에요~👏 onmousemove~")
    // }
    //     // 이벤트를 ⭐⭐'구독시킨! 태그!' 에 대해서⭐⭐ 이벤트가 일어날 때, 실행된다. 
            // 어디에 붙였는가! 가 중요 ⭐⭐⭐⭐⭐ 


// 🔷 mouseenter : 마우스를 '태그위로' '올려졌을 때!'⭐ 실행되는 이벤트 
    // CSS 호버 같아! 

    // document.querySelector('.box').onmouseenter = function() {
    //     console.log("마우스가 올려짐, mouseenter 하고 있는 상태~, box class 에 대해서만! 🤩")
    // }


    let _box = document.querySelector('.box');

// 🔷 mouseleave : 마우스가 태그 위에서, 빠져나갔을 때, 실행되는 이벤트
    // 이거 두개 쓰면, 호버네~~~~~

    _box.ommouseleave = function() {
        console.log("마우스 나갔어 onmouseleave 야~")
    }

    // 기능을 호버처럼 추가할 수 있겠구나 
        // 기능 js 쪽에서 호버 기능 쓸 대 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        // enter 랑 leave


// 🟦 개발할 때, pc 모바일, 이렇게 웹을 만들텐데, 
        // 모바일 환경에서 실행되는 이벤트! 가 있음. 
        // '모바일 터치' 
            // 🔷 touchstart : 'mobile touch' : 화면을 터치한! 그 순간! 
            window.ontouchstart = function() {
                console.log("모바일 터치 되었어~ ontouchstart 🧱🧱🧱")
            }
                // [중요] 이거 디버깅은 개발자 도구에서 모바일로 한다 ⭐⭐⭐⭐⭐ 
                // 모바일에서는 이거 사용해야 함 

// 🔷 touchend : 화면을 터치하다가 떼면 나온다. 
window.ontouchend = function() {
    console.log("모바일 터치 하다가 떼었어~ ontouchend 🔮🔮")
}

// 🔷 touchmove : 화면을 터치하고, 이동할 때, 
    // 모바일은 터치하고 이동같은게 잘 없어. 
    // 슬라이드 좌표 계산 으로 활용 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
window.ontouchmove = function() {
    
    console.log( "터지하고 이동중 , ontouchmove , 🤟 ")

}
    



// click 의 이벤트를 보자 
    // 이벤트 실행될 때, 매개변수로, 해당 이벤트의 내용이 전달 된다. ⭐⭐⭐⭐⭐
_box.onclick = function(event) {
    // 이벤트가 실행되면, 이벤트의 내용이 값으로 넘어온다. 
    // 실행된 이벤트의 내용이 넘어옴 ⭐⭐⭐⭐⭐⭐⭐⭐ 
    // 어디 위치를 클릭했고 등등
    console.log(event);

    // 해당 이벤트가 일어난 타겟⭐⭐ 
        // 일어난 태그! 
        // 지금은 window 에 클릭 이벤트가 일어나면, 실행되는 기능을, 실행시켰고,
        // 클릭된 태그를 가져온다. 
        // 어떤 태그가 클릭되었는지! 를 가져온다. ⭐⭐
        // p 태그를 클릭하면, 'p 태그'가 나온다. 
        // 클릭했을 때, '제거' 하거나, '바꿀 때' ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
    console.log(event.target); 
   
}

// 🔷 마우스의 위치를 가져와봐야 겠다. 
window.onmousemove = function(event) {
    // event 의 타입이 뭐지? 
    console.log(event.type); 

    // 해당 이벤트가 일어나면, '마우스의 좌표 x값'
    // 좌표값은 픽셀 단위 임 ⭐⭐⭐ 
    // '0 ~ 브라우저 너비크기' 구할 수 있음.  
    console.log(event.pageX);

    // 해당 이벤트 발생시, 마우스 좌표의 Y 값!
        // '0 ~ 브라우저의 높이'
        // 이벤트가 일어난 것의 내용을 매개변수로 받고 > 이걸 사용할 수 있음. ⭐⭐⭐ 
    console.log(event.pageY);

    // 이만큼 움직이면 > SLIDE 가 되어라~! 라고 만들 수 있어 ⭐⭐⭐⭐⭐ 
}



// 🔷 키보드 입력 
window.onkeydown = function(event) {

    // e.keyCode, ASCII 코드 값을 가져올 수 있음. (아스키 코드 값)
    console.log(event.keyCode);
        // 이상한 숫자가 뜸 
        // 키보드 하나 당 > ⭐ascii 코드⭐로 대응되어 있어서 > 그게 뜬다. 

    // 특정 키를 입력받았을 때, 이렇게 쓸 수 있어⭐⭐⭐ 
    if(event.keyCode == 65) {
        console.log("너는 A 키를 입력받았어!!!")
    }

    }



// 🔷 기본동작을 취소하는 방법 
        // // <!-- 🟦 필요성 -->
        // <!-- form 태그는 서버에 데이터를 전달되면서 > 다시고침 된다 ⭐⭐⭐ > 이 기본 동작을 제거하고 싶을 때 e.preventdefault -->
        // <form action="">
        //     <!-- button 태그의 기본 속성은 submit 이다. / 없어도 들어가 있음.  -->
        //     <button type="submit"> 클릭         </button>
        // </form>

    let _button2 = document.querySelector('.btn_class')
    _button.onclick = function(e) {
        // 기본 동작이 제거 된다. 
        // 브라우저 상에서 기본 동작 되는 것을 제거할 수 있다. 
        e.preventDefault();
    }
        // 😥😥😥😥😥😥 이거 확인을 잘 못 함. 
