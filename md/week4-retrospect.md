**변수,상수,함수 작성 과제**

## 📋 목차

- [typeahead](#typeahead)

- [회고](#회고)

## typeahead
> 과정   

`키보드 방향키로 리스트에 접근` 
```js
let selectedIndex = -1
```
```js
searchInput.addEventListener('keydown', (e) => {
	const items = predictionList.querySelectorAll('li')
	if (predictionList.hasAttribute('hidden') || items.length === 0) return

	if (e.key === 'ArrowDown') {
		e.preventDefault()
		if (selectedIndex < items.length - 1) {
			selectedIndex += 1
		} else {
		  selectedIndex = 0
		}	
		updateHighlight(items)
	}
	else if (e.key === 'ArrowUp') {
		e.preventDefault()
		if (selectedIndex > 0) {
			selectedIndex -= 1
		} else {
		  selectedIndex = items.length - 1
		}
		updateHighlight(items)
	}
	else if (e.key === 'Enter') {
		if (selectedIndex >= 0) {
			e.preventDefault()
			searchInput.value = items[selectedIndex].textContent
			predictionList.setAttribute('hidden', true)
			predictionList.innerHTML = ''
			selectedIndex = -1
		}
}
})  
```
- prediciton 리스트가 보이는 경우 키보드 방향키로 해당 리스트들에 접근 가능하도록 설계.   

`if문 > switch문으로 수정`   
: 키보드 이벤트에서 특정 키(ArrowUp, ArrowDown, Enter)에 따라 서로 다른 동작을 수행해야 한다.   
 키가 늘어나고 조건이 명확해질수록 switch 문으로 바꾸는 것이 더 구조적이고 읽기 쉬운 것 같다.

``` js
searchInput.addEventListener('keydown', (e) => {
	const items = predictionList.querySelectorAll('li')
	if (predictionList.hasAttribute('hidden') || items.length === 0) return
	switch (e.key) {
		case 'ArrowDown':
			e.preventDefault()
			if (selectedIndex < items.length - 1) {
				selectedIndex += 1
			} else {
				selectedIndex = 0
			}
			updateHighlight(items)
			break
		case 'ArrowUp':
			e.preventDefault()
			if (selectedIndex > 0) {
				selectedIndex -= 1
			} else {
				selectedIndex = items.length - 1
			}
			updateHighlight(items)
			break
		case 'Enter':
			if (selectedIndex >= 0) {
				// form 제출 방지
				e.preventDefault()
				searchInput.value = items[selectedIndex].textContent
				predictionList.setAttribute('hidden', true)
				predictionList.innerHTML = ''
				selectedIndex = -1
			}
			break
	}
})
```  
`선택된 인덱스엔 하이라이트 효과 (컬러)`   
![typeahead](/homework/04-typeahead/img/typeahead.gif)   
```css
li.highlight {
  background-color: #bde4ff;
	cursor: pointer;
}
```
```js
function updateHighlight(items) {
	items.forEach((item, index) => {
		item.classList.toggle('highlight', index === selectedIndex)
	})
}
```

## 회고
![ipad, iphone](/homework/04-typeahead/img/ipad,%20iphone.png)
아이패드 케이스를 사려고 네이버에 '아이패드'를 검색했다가 갑자기 아이폰이 사고 싶어져서 아이폰을 검색했다.  
아이폰을 검색하면 맥북이나 아이패드 같은 제품은 광고하지 않는다. 광고 배너와 랜딩 화면 모두 아이폰 중심으로 완전히 분리되어 있었다.  
배너 이미지를 클릭하면 해당 상품으로 바로 연결까지 된다. 이것저것 검색해보다가 딥링크와 URL파라미터 분석이라는걸 알게되었다. 검색하면서 만들다 보니 벌써 일요일이다;;

일단 수업시간에 배운걸 최대한 복습해보고 싶어서 주어진 과제중에 하나를 골랐다. 검색에 관심이 생겼기 때문에 검색어 자동 완성이라는 타입어헤드를 만들어 보는 시간을 가졌다.

하...시간이 너무 빠르다!!! 
