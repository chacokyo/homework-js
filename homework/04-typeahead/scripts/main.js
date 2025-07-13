/* global COUNTRIES */

;(() => {
	const typeahead = document.querySelector('.typeahead')
	const searchInput = typeahead.querySelector('[type = "search"]')
	const predictionList = typeahead.querySelector('ul')

	let selectedIndex = -1

	searchInput.addEventListener('input', ({ currentTarget: input }) => {
		// 검색어가 바뀌면 선택된 index값 초기화
		selectedIndex = -1
		const search = input.value.trim()
		if(!search) {
			predictionList.setAttribute('hidden', true)
			return
		}

		const searchList = COUNTRIES.filter(({ name }) => name.startsWith(search))
		const listTemplate = searchList.reduce((template, { name }) => {
			const [toBold, restName] = boldSearchTerms(name, search)
			template += `<li><strong>${toBold}</strong>${restName}</li>`
			return template
		}, '')

		predictionList.innerHTML = listTemplate
		predictionList.removeAttribute('hidden')

	})

	// 키보드 접근
	searchInput.addEventListener('keydown', (e) => {
		const items = predictionList.querySelectorAll('li')
		if (predictionList.hasAttribute('hidden') || items.length === 0) return

		switch (e.key) {
			case 'ArrowDown':
				// 리스트 탐색만을 위한 기본 작동 방지
				e.preventDefault()
				if (selectedIndex < items.length - 1) {
					selectedIndex += 1
				} else {
					selectedIndex = 0
				}
				updateHighlight(items)
				break

			case 'ArrowUp':
				// 리스트 탐색만을 위한 기본 작동 방지
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

	// 선택된 인덱스의 컬러 하이라이트
	function updateHighlight(items) {
		items.forEach((item, index) => {
			item.classList.toggle('highlight', index === selectedIndex)
		})
	}

	predictionList.addEventListener('click', ({ target, currentTarget: list }) => {
		if(!target.closest('li')) return
		searchInput.value = target.textContent
		list.setAttribute('hidden', 'true')
	})

	document.addEventListener('click', ({ target }) => {
		if (target.closest('.typeahead')) return
		predictionList.setAttribute('hidden', 'true')
		predictionList.innerHTML =''
	})

	function boldSearchTerms(name, search){
		const searchLength = search.length
		const toBold = name.substring(0, searchLength)
		const restName = name.substring(searchLength)
		return [toBold, restName]
	}

})()