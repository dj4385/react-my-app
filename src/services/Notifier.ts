import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { IToast } from '../models/IToast';

export class NotifierService {

    static showSuccess(toast: IToast) {
        Toastify({
            text: toast.message,
            duration: toast.duration || 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: toast?.newToastWindow ? true : false,
            close: toast?.closeOption || true,
            gravity: toast.gravity || "top", // `top` or `bottom`
            position: toast.position || "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            // onClick: function(){} // Callback after click
        }).showToast();        
    }

    static showError(toast: IToast) {
        Toastify({
            text: toast.message,
            duration: toast.duration || 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: toast?.newToastWindow ? true : false,
            close: toast?.closeOption || true,
            gravity: toast.gravity || "top", // `top` or `bottom`
            position: toast.position || "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            // onClick: function(){} // Callback after click
        }).showToast();        
    }
}
