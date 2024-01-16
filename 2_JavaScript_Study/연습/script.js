$(document).ready(function() {
    // 초기 메시지
    appendMessage('챗봇', '안녕하세요! 강남 맛집을 알려드릴게요.');

    // 엔터 키 감지
    $('#userInput').keydown(function(event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });

    // 유저가 메시지를 입력하면 호출되는 함수
    window.sendMessage = function() {
        const userInput = $('#userInput').val();
        if (userInput.trim() === '') return;

        appendMessage('유저', userInput);

        // 챗봇 대답 호출
        getBotResponse(userInput);

        // 입력창 비우기
        $('#userInput').val('');
    };

    // 챗봇 대답을 받아오는 함수 (가상 데이터 사용)
    function getBotResponse(userInput) {
        // 여러 가지 대화 패턴을 추가할 수 있습니다.
        const responses = {
            '안녕': '안녕하세요!',
            '맛집 추천': '강남에서 맛있는 음식점으로 "불고기집"이 있어요.',
            '다른 추천': '또 다른 추천이 필요하신가요?'
            // 다양한 패턴에 대한 가상 응답 추가
        };

        // 사용자 입력과 일치하는 응답 찾기
        const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
        // 챗봇 응답 추가
        appendMessage('챗봇', response);
    }

    // 메시지를 화면에 추가하는 함수
    function appendMessage(sender, message) {
        const chatBody = $('#chatBody');
        const className = sender === '유저' ? 'user' : 'bot';
        const messageHtml = `<div class="chat-message ${className}">${message}</div>`;
        chatBody.append(messageHtml);

        // 스크롤을 가장 아래로 이동
        chatBody.scrollTop(chatBody.prop('scrollHeight'));
    }
});