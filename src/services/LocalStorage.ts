import { STORAGEENUM } from "../models/enums";

export class LocalStorageService {
    static getItem(key: STORAGEENUM) {
        return localStorage.getItem(key);
    }

    static setItem(key: STORAGEENUM, value: string) {
        localStorage.setItem(key, value);
    }

    static deleteItem(key: STORAGEENUM) {
        localStorage.removeItem(key);
    }

    static clearItem() {
        localStorage.clear();
    }

}
