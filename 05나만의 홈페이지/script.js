function showSubList(category) {
    // 숨겨진 모든 서브 리스트를 비활성화
    var subLists = document.querySelectorAll('.sub-list,sub-list2');
    subLists.forEach(function (subList) {
        subList.classList.remove('active');
    });

    // 클릭한 카테고리에 해당하는 서브 리스트 활성화
    var targetSubList = document.getElementById(category + '-list');
    targetSubList.classList.add('active');
}
