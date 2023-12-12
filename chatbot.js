// ä�� �޽����� ǥ���� DOM
const chatMessages = document.querySelector('#chat-messages');
// ����� �Է� �ʵ�
const userInput = document.querySelector('#user-input input');
// ���� ��ư
const sendButton = document.querySelector('#user-input button');
// �߱޹��� OpenAI API Ű�� ������ ����
const apiKey = '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';
// OpenAI API ��������Ʈ �ּҸ� ������ ����
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
function addMessage(sender, message) {
    // ���ο� div ����
    const messageElement = document.createElement('div');
    // ������ ��ҿ� Ŭ���� �߰�
    messageElement.className = 'message';
    // ä�� �޽��� ��Ͽ� ���ο� �޽��� �߰�
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.prepend(messageElement);
}
// ChatGPT API ��û
async function fetchAIResponse(prompt) {
    // API ��û�� ����� �ɼ��� ����
    const requestOptions = {
        method: 'POST',
        // API ��û�� ����� ����
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // ����� AI ��
            messages: [{
                role: "user", // �޽��� ������ user�� ����
                content: prompt // ����ڰ� �Է��� �޽���
            },],
            temperature: 0.8, // ���� ��� �پ缺
            max_tokens: 1024, // ������� �޽��� �ִ� ��ū(�ܾ�) �� ����
            top_p: 1, // ��ū ���ø� Ȯ���� ����
            frequency_penalty: 0.5, // �Ϲ������� ������ �ʴ� �ܾ �����ϴ� ����
            presence_penalty: 0.5, // ������ �ܾ ������ �ݺ��Ǵ� ���� �����ϴ� ����
            stop: ["Human"], // ������ �ؽ�Ʈ���� ���� ������ ����
        }),
    };
    // API ��û�� ���� ó��
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
        console.error('OpenAI API ȣ�� �� ���� �߻�:', error);
        return 'OpenAI API ȣ�� �� ���� �߻�';
    }
}
// ���� ��ư Ŭ�� �̺�Ʈ ó��
sendButton.addEventListener('click', async () => {
    // ����ڰ� �Է��� �޽���
    const message = userInput.value.trim();
    // �޽����� ��������� ����
    if (message.length === 0) return;
    // ����� �޽��� ȭ�鿡 �߰�
    addMessage('You', message);
    userInput.value = '';
    //ChatGPT API ��û�� �亯�� ȭ�鿡 �߰�
    const aiResponse = await fetchAIResponse(message);
    addMessage('TasteMap', aiResponse);
});
// ����� �Է� �ʵ忡�� Enter Ű �̺�Ʈ�� ó��
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});