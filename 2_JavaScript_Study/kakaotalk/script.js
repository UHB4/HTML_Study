$(document).ready(function () {
    var chatBody = $('#chatBody');
    var userInput = $('#userInput');
    var sendMessageBtn = $('#sendMessageBtn');

    function showMessage(message) {
        chatBody.append('<div class="chat-message">' + message + '</div>');
        chatBody.scrollTop(chatBody[0].scrollHeight);
    }

    function showOptions(options) {
        var optionsHtml = '<div class="chat-options">';
        options.forEach(function (option) {
            optionsHtml += '<button class="option-btn">' + option + '</button>';
        });
        optionsHtml += '</div>';
        chatBody.append(optionsHtml);
        chatBody.scrollTop(chatBody[0].scrollHeight);
    }

    sendMessageBtn.click(function () {
        var userMessage = userInput.val();
        showMessage('<span class="user-name">사용자:</span> ' + userMessage);
        processUserInput(userMessage);
        userInput.val('');
    });

    function processUserInput(userInput) {
        if (userInput === '안녕') {
            showMessage('<span class="bot-name">봇:</span> 안녕하세요!');
            showOptions(['상품 조회', '고객센터 연결']);
        } else if (userInput === '상품 조회') {
            showMessage('<span class="bot-name">봇:</span> 쇼핑몰 상품 목록을 표시합니다.');
            showOptions(['전체 상품 보기', '카테고리별 상품 보기', '검색']);
        } else if (userInput === '고객센터 연결') {
            showMessage('<span class="bot-name">봇:</span> 고객센터로 연결합니다.');
            showOptions(['상품 문의', '주문 및 결제 문의', '기타 문의']);
        } else {
            showMessage('<span class="bot-name">봇:</span> 죄송합니다. 이해할 수 없는 명령입니다.');
        }
    }

    // Handle option button click
    chatBody.on('click', '.option-btn', function () {
        var selectedOption = $(this).text();
        showMessage('<span class="user-name">사용자:</span> ' + selectedOption);
        processUserInput(selectedOption);
    });
});
