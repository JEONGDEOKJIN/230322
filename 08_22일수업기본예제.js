
// 🟦 Readme 
    // 1. 교수님 수업자료 폴더 중 'index.js' & 내가 필기한 '01_index.js' 을 참고 



// 🟦 DOM

    // [의의]
        // document object model
        // DOM 트리의 기본 단위는 '노드'

// 🔷 '태그를 추가' 하는 방법 
    // 1. '문자 사이' 에 태그를 넣어서, 태그를 만드는 방법 
    document.querySelector('.add_class').innerHTML = "<h1> 태그 내용이 이곳에 추가 </h1>";

    // 2. 'DOM의 노드' 구조를 활용해서 추가 
        // createElement('태그명') 메소드 사용 
    let _div_test = document.createElement('div')
        // [해석]
            // 'div' 태그를 만들거야 > 만들어진걸 '_div' 변수 안에 넣을거야. 



// 🔷 'DOM 트리에 태그 넣어주는 방식'으로 태그 생성하기 
    // [느낀점]
        // 이 흐름이 진짜 중요하다는 생각을 함 ⭐⭐⭐⭐⭐ 

    // 1.  태그 생성 

        // createElement 메소드 
            // 태그 생성 메소드 
            // [사용법] createElement(태그명)
    
        // 예문
            let _div = document.createElement('div')
            // [중요한 점]
                // 이 순간, 태그는 현재, ⭐'메모리 공간에 만!'⭐ 있음. 
                    // 이 상태를 잘 이해해야 함 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
                    // '메모리 공간' 에만 있는 이유는, 변수에 할당했기 때문에 (내 추측)


    // 2. 생성한 태그에 '내용' 넣기 

        _div.innerHTML = " <p> _div 변수에 담긴 내용 </p> <P> 내용이 </P> <div> 없니? 있니? </div> <div> DOM 트리에 넣는 중~ </div> "
            // [궁금증]
                // `_div` 라는 변수에 . 으로 뭔가를 한다. 이걸 뭐라고 부르지? ❓❓❓❓❓❓
                // 모르는 내용을 매번 질문하지 말고, 다른 강의들을 통해서, 해결하는게 필요할 듯 


        // 🔷 태그 안에 '문자만' 넣고 싶을 때, innerText 활용하기 
            
            // 1. 일반적인 경우 : '_div' 변수 안에 '텍스트'랑 '태그' 랑 같이 넣게 됨.  
            console.log(_div.innerHTML);
                // [결과물]
                    // ` <p> 내용이 </p> <div> 없니? 있니? </div> <div> DOM 트리에 넣는 중~ </div>` 이렇게 뜬다.
            
            // 2. 텍스트만 넣고 싶을 때 : innerText 활용 
            console.log(_div.innerText)
                // [결과물]
                    // `내용이   없니? 있니?   DOM 트리에 넣는 중~` 이렇게 나옴 
                    // 태그들 모두 제거





    // 3. 생성한 태그에 '클래스' 추가 

        _div.classList.add('new_tag')


    // 4. 메모리에 있는 걸, '원하는 위치(트리)에 추가' 하기 

        // append() 메소드 ⭐⭐⭐
            // DOM 요소에 새로운 요소를 추가하는 데 사용
            // [문법]
                // ⭐parentNode.append(child1, child2, ..., childN) ⭐⭐⭐⭐⭐
            
            // [궁금한 것] ⭐⭐⭐⭐⭐ 
                // 1. '내가 원하는 태그 밑' 으로 들어가게 하려면, class 등으로, 내가 원하는 걸 찝고 > append 를 넣어줘야 하나? 
                // 2. 기본적으로 body 에 추가하는 것 처럼, 적어주면, 안 되는거겠지? 
                // 3. 기본 예문 `document.body.append(_div);` 에서, body 만 넣어도, 그곳에 append 될 수 있는 이유는? 

                

        // [예문] 기본적으로 body 에 추가해보기
            document.body.append(_div);
                // [해석]
                    // 'document 중 body' 에 '_div 변수' 에 담긴걸, 추가해줘

            setTimeout( () => {
                document.querySelector('.add_class').append(_div);
            } , 5000 )
                // [해석]
                    // 실제로 5초 뒤에, 개발자 도구에서, 추가되는 모습을 볼 수 있음. 



        // [예문] 다른 태그, 에 추가해보기
            document.querySelector('h1').append(_div)
                // 잘 안 되네 😥😥 

        // [예문] ⭐parentNode 자리⭐에, '변수' 가 와도 되네! by. GPT 
            // var newElement = document.createElement("p");
            // var textNode = document.createTextNode("새로운 문장입니다.");
            // newElement.appendChild(textNode);
        
            // var myDiv = document.getElementById("myDiv");
            // myDiv.append(newElement);

        
    // [궁금증]
        // ❓❓❓ 그러면, 뭔가를 만들 때, 그냥 html 파일에 만드는 거랑, 이렇게 js 상에서 html 로 만드는 거랑, 뭐가 효율적일까? 
        


    
// 🔷 태그를 만들 때, innerHTML 과 append 비교 

    // 1. 보안 이슈 
        // innerHTML 은 '태그가 문자로 기입' 된다. > 따라서, '보안' 이 취약함. 
        // append 는, DOM 트리 안에, DOM 트리의 노드로, 추가 됨. 

    // 2. 태그 작업 세분화 
        // append 하면 > '태그 작업을 세분화' 할 수 있음. ⭐⭐⭐⭐⭐ 




//  🟦 사용 예제 : 버튼 만들어보기 

    // 1. 버튼 태그 생성 
        let _button = document.createElement('button')

    // 2. 태그에 '내용' 넣기 
        _button.innerHTML = "눌러보슈 : 누르면 > 'div_' 에 넣은거 다 삭제~ (삭제는 remove() 메소드 사용) (click event listenr 도 달려있어~) "

    // 3. 태그에 '클래스 넣기 
        _button.classList.add('new_button')
    
    // 4. '원하는 위치'에 추가
        document.body.append(_button)


// 🟦 사용 예제 : 클릭했을 때 > div 태그 지우기
    
    // 1. remove() 메소드
        // [문법]
            // `지우고싶은태그.remove()` 로 작성하면 > 원하는 태그 삭제 가능 ⭐⭐⭐
        _button.onclick = function() {
            _div.remove()
        }


    // 2. removeChild() 메소드
        // [문법]
            // 원하는 태그를 지우려면 1) 지우고 싶은 태그 2) 지우고 싶은 태그의 부모 중 하나 를 찝어줘야 함 ⭐⭐⭐⭐⭐ 
            // document.상위태그중하나(굳이body아니어도됨).removeChild(지우고싶은태그)⭐⭐⭐⭐⭐⭐

        // [쓰임]
            // 어딘가를 반복문으로 돌면서, 그곳에 있는 태그를 지울 때 사용한다고 하셨음. 

        // [예문] 
        // _button.onclick = function() {
        //     document.body.removeChild(_div); 
        // }
            // 📛📛📛 잘 안 되네 
        
                

// 🟦 이벤트를 추가하는 법 

    // 1. onclick 방식 
        // [특징]
            // onclick(키 값) 에 함수를 직접 대입해서 추가하는 방법임. 
            // '덮어씌우는 방식' 임. 
            // 

    // 2. addEventListner()
        // [특징]
            // 첫 번째 방식에서 'on' 만 빼면 된다. 
                // ex) onscroll 에서 > on 빼고 > scroll 
            
        // '매개변수' 분석 
            // 1) 첫 번째 요소 : ⭐⭐'구독할 이벤트 이름'⭐⭐ 을 넣어주기 
            // 2) 두 번째 요소 : 이벤트가 listen 되면 > '실행시킬 함수'⭐⭐

        // 예문 
            _button.addEventListener("click", function() {

                console.log( "현재 첫 번째 클릭 구독중. event listener 로 듣는중!" )

            })
            
        

    


