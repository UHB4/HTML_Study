// $(document).ready(function() {
//     // 초기 메시지
//
//     let responses; // 전역 변수로 응답 데이터를 저장할 변수를 선언합니다.
//
//     // JSON 데이터 비동기로 가져오기
//     $.getJSON('responses.json', function(data) {
//         responses = data;
//     });
//
//     // 챗봇 대답을 받아오는 함수 (가상 데이터 사용)
//     function getBotResponse(userInput) {
//         // 사용자 입력과 일치하는 응답 찾기
//         const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
//         // 챗봇 응답 추가
//         appendMessage('챗봇', response);
//     }
//
//     // 메시지를 화면에 추가하는 함수
//     function appendMessage(sender, message) {
//         const chatBody = $('#chatBody');
//         const className = sender === '유저' ? 'user' : 'bot';
//         const iconSrc = sender === '유저' ? 'images/chat_icon.jpg' : 'images/chat_icon.jpg';
//         const iconAlt = sender === '유저' ? '사용자 아이콘' : '채팅 아이콘';
//
//         // 생성되는 div에 클래스 추가
//         const messageDiv = $('<div>').addClass('chat-message').addClass(className);
//         const iconDiv = $('<div>').addClass('chat-icon');
//         const iconImg = $('<img>').attr('src', iconSrc).attr('alt', iconAlt);
//         iconDiv.append(iconImg);
//
//         const textDiv = $('<div>').html(message);
//
//         messageDiv.append(iconDiv).append(textDiv);
//         chatBody.append(messageDiv);
//
//         chatBody.scrollTop(chatBody.prop('scrollHeight'));
//     }
//
//     // 엔터 키 감지
//     $('#userInput').keydown(function(event) {
//         if (event.keyCode === 13) {
//             sendMessage();
//         }
//     });
//
//     // 유저가 메시지를 입력하면 호출되는 함수
//     window.sendMessage = function() {
//         const userInput = $('#userInput').val();
//         if (userInput.trim() === '') return;
//
//         appendMessage('유저', userInput);
//
//         // 챗봇 대답 호출
//         getBotResponse(userInput);
//
//         // 입력창 비우기
//         $('#userInput').val('');
//     };
//
//
// });
//
$(document).ready(function () {
    $("#inquiryButton").click(function () {
        $("#chatBox").toggle();
        $("#chatBox2").toggle();
    });
});
