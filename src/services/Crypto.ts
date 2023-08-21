import CryptoJS from "crypto-js";

const secret: any = process.env.REACT_APP_CRYPTO_SECRET

export class CryptoService {
    
    static encrypt(data: any) {
        return CryptoJS.AES.encrypt(data, secret).toString();
    }

    static decrypt(data: any) {
        const bytes = CryptoJS.AES.decrypt(data, secret);
        const decryptText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptText;
    }
}
