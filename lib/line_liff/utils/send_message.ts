import axios from 'axios';

export async function sendMessage(userId: string, message: { type: string; text: string }[]) {
    try {
        await axios.post('/api/line/send-message', {
            userId,
            messages: message
        });
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}
