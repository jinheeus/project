// talk.js

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    // 사용자가 작성한 글을 content에 추가하는 함수
    function addPost(message) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = message;
        content.appendChild(post);
    }

    // 임시 데이터: 사용자가 작성한 글
    const samplePosts = [
        '첫 번째 글입니다.',
        '두 번째 글입니다.',
        '세 번째 글입니다.',
        // ... 계속해서 추가할 수 있습니다.
    ];

    // 임시 데이터를 이용하여 글을 추가
    samplePosts.forEach(addPost);
});
