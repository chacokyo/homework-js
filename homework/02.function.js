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