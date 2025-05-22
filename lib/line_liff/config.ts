import { ConfigLineLiffType } from './types';

const CONFIG_LINE_LIFF: ConfigLineLiffType = {
    LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID!,
    CHANNEL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN!,
};

export default CONFIG_LINE_LIFF;
