import { NextResponse } from 'next/server';
import axios from 'axios';
import CONFIG_LINE_LIFF from '@/lib/line_liff/config';

export async function POST(request: Request) {
    try {
        const { userId, messages } = await request.json();

        const url = 'https://api.line.me/v2/bot/message/push';
        const body = {
            to: userId,
            messages,
        };

        const headers = {
            Authorization: `Bearer ${CONFIG_LINE_LIFF.CHANNEL_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        };

        await axios.post(url, body, { headers });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
