import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface RandomQRCodeProps {
    value: string;
    paymentMethod: string;
}

const paymentMethodLogos: { [key: string]: { src: string, width: number, height: number } } = {
    VNPAY: { src: 'https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg', width: 120, height: 120 },
    MoMo: { src: 'https://i.pinimg.com/736x/72/1e/b1/721eb1ec1b5bf1d229e74174affe469b.jpg', width: 70, height: 70 },
    MasterCard: { src: 'https://i.pinimg.com/736x/79/77/9f/79779f77d2a5aa5eca98d313c10c7f0e.jpg', width: 100, height: 70 }
};

const RandomQRCode: React.FC<RandomQRCodeProps> = ({ value, paymentMethod }) => {
    const logo = paymentMethodLogos[paymentMethod];

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <QRCodeSVG value={value} size={272} />
            {logo && (
                <img
                    src={logo.src}
                    alt={paymentMethod}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: `${logo.width}px`,
                        height: `${logo.height}px`
                    }}
                />
            )}
        </div>
    );
};

export default RandomQRCode;