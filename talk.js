// talk.js

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    // ����ڰ� �ۼ��� ���� content�� �߰��ϴ� �Լ�
    function addPost(message) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = message;
        content.appendChild(post);
    }

    // �ӽ� ������: ����ڰ� �ۼ��� ��
    const samplePosts = [
        'ù ��° ���Դϴ�.',
        '�� ��° ���Դϴ�.',
        '�� ��° ���Դϴ�.',
        // ... ����ؼ� �߰��� �� �ֽ��ϴ�.
    ];

    // �ӽ� �����͸� �̿��Ͽ� ���� �߰�
    samplePosts.forEach(addPost);
});
