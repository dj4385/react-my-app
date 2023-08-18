import {firebaseStore} from "../firebaseSetup";
import { IToDo } from "../models/IToDo";
import { FIRESTORE_COLLECTION } from "../models/enums";

const dbRef: any = firebaseStore.collection(FIRESTORE_COLLECTION.todoCollection);

export default class FirestoreService {

    static getAll() {
        try {
            return dbRef
        } catch (error) {
            return error;
        }
    }

    static async create(req: IToDo) {
        try {
            return await dbRef.add({
                ...req,
                createAt: Date.now()
            });
        } catch (error) {
            return error;
        }
    }

    static async updateAll(key: string, req: IToDo) {
        try {
            return await dbRef.doc(key).set(req);
        } catch (error) {
            return error;
        }
    }

    static async updateIndividual(key: string | undefined, req: IToDo) {
        try {
            return await dbRef.doc(key).update(req);
        } catch (error) {
            return error;
        }
    }

    static async delete(key: string) {
        try {
            return await dbRef.doc(key).delete();
        } catch (error) {
            return error;
        }
    }
    
}
