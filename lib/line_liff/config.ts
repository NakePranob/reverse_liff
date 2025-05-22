interface ConfigLineLiffType {
    LIFF_ID: string;
}

const CONFIG_LINE_LIFF: ConfigLineLiffType = {
    LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID!,
};

export default CONFIG_LINE_LIFF;
