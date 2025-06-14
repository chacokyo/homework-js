**변수,상수,함수 작성 과제**

## 📋 목차

- [variables](#variables)
	- 과정
	- 결과
	- 궁금증

- [function](#function)
	- 과정
	- 결과

- [회고](#회고)

## variables
> 과정
```js
let userName = 'jisu'
let loginStauts = true
let userAge = 20
let productPrice = 39_900 + '원'
let userCommentCount = 20
let currentPageNumber = 20
let memberGrade = 'VIP'
let buttonClick = true     
```

- 변수의 키워드는 let
- 두개 이상이 연결되어야 하는 이름의 경우엔 카멜케이스 표기법을 사용


``` js
const ABSOLUTE_ZERO = '-273.15°C'
const BACKGROUND_COLOR = '#fff' 
```

- 상수의 경우엔 대문자로 표기하여 변수와 상수의 구분이 용이하였다.

> 결과
-  의미가 담긴 이름은 짓기 어렵다..

> 궁금증
- userCommentCount에서 사용자와 관리자를 나누기 위해 사용자를 뜻하는 user를 붙였다.   
사용자와 관리자의 댓글 수를 모두 관리하여, 관리자가 사용자와 얼만큼 상호작용을 하였는지 그 수를 판단하기 위한다면 나누는게 좋지 않을까? 싶었다.   
근데 그부분을 판단하고 처리하는게 js에서 이루어지는건가? 데이터 관리하는 다른 무엇인가가 있는건가.. 모르겠다 ㅠㅠ

## function  
> 과정 (4. 할인가 계산)
``` js
function getDiscountedPrice (originalPrice, discountPercent) {
	return originalPrice - ( originalPrice * parseInt(discountPercent) / 100 ) 
}
console.log(getDiscountedPrice(18700,'20%'))
```
- 앞선 2번 문제와 같이 %값을 사용해 계산해야 하는 문제였다. 2번 문제의 풀이 방식과 달리 이번 문제에서는 20%라는 string을 숫자로 변환하는 parseInt()를 적용시켜 문제를 해결하였다.

> 과정 (5. 등급 판단)
```js
function infoResult(userScore){

	const info = {
		score : userScore,
		grade : 'A',
		description: '매우 우수'
	}
	if(!info.score){
		return '점수가 없습니다.'
	}
	else if (userScore >= 90){
		info.grade= 'A',
		info.description= '매우 우수'
	} else if (userScore >= 80){
		info.grade= 'B',
		info.description= '우수'
	}  else if (userScore >= 70){
		info.grade= 'C',
		info.description= '보통'
	}  else if (userScore > 60){
		info.grade= 'D',
		info.description= '미달,통과 기준 근접'
	}  else {
		info.grade= 'F',
		info.description= '낙제'
	}

		return info

}
```

- info라는 객체를 생성한 뒤 if조건문이 참일 시 info 타입의 값을 변경하여, 결과값을 return으로 내보내는 방식으로 코드를 구현하였다.

## 회고
팀원들이랑 같이 과제를 하면서 대화를 나누었다. 결과값은 같지만 변수 이름부터 시작해서 코드 한줄 한줄.. 참 달랐다. 맞고 틀리고는 없겠지만, 팀원들의 코드를 보면서 '저렇게 접근하는게 더 유지 보수 측면에서 좋겠구나..' 싶은 점들이 많았다. 앞으로도 같이 공유하면서 지내고 싶다.

수업시간에 이해 안가는 부분이 많았다. 처음 시작해서 그런지.. 너무 근본적인 부분에 의문을 갖기도 한 것 같다. 왜 호이스팅이라는걸 만든건지..왜 여러 속성중 함수값만 메서드로 칭하는건지.. 앞으론 이러한 부분에 너무 깊게 빠지진 말아야겠다. 

구글 시트로 질문을 받으신 뒤 수업 흐름에 맞춰서 질문에 답해주시는 진행 방식이 좋았다. 앞으로도 적극적으로 질문해야겠다!!