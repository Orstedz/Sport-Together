import { QRCodeSVG } from 'qrcode.react';

const RandomQRCode = () => {
    const randomData = `https://example.com/${Math.random().toString(36).substring(2)}`;

    return (
        <div>
            <QRCodeSVG value={randomData} size={400} />
        </div>
    );
};

export default RandomQRCode;
