// 1. 인사말 메세지

function greetUser (username) {
	return '"안녕하세요! ' + username + '님. 좋은 하루 되세요!'
}

// console.log(greetUser('jisu'))

// 2. 원가 계산

const calculateOriginalPrice = function (priceWithTax) {
	const tax = 3.3
	return priceWithTax - (priceWithTax / (100  + tax))
}

// console.log(calculateOriginalPrice(1000))

//3. 주류 판매 가능 여부
const adultAge = 19

const registrationCard = {
	name : 'jisu',
	age : 20,
	gender : 'women'
}

let canSellAlcohol = registrationCard => registrationCard.age > adultAge

// console.log(canSellAlcohol(registrationCard))

//4. 할인가 계산
function getDiscountedPrice (originalPrice, discountPercent) {
	return originalPrice - ( originalPrice * parseInt(discountPercent) / 100 ) 
}

// console.log(getDiscountedPrice(18700,'20%'))

//5.등급 판단
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

// console.log(infoResult())