import axios from 'axios';
import CONFIG_LINE_LIFF from '@/lib/line_liff/config';

export async function sendMessage(userId: string, message: { type: string; text: string }[]) {
    const baseUrl = 'https://api.line.me/v2/bot';
    const url = `${baseUrl}/message/push`;

    // body Request
    const body = {
        to: userId,
        messages: message,
    };

    // header Request
    const headers = {
        Authorization: `Bearer ${CONFIG_LINE_LIFF.CHANNEL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    };

    try {
        await axios.post(url, body, { headers });
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}
