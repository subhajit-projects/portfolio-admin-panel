import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessToast = (message) => {
    return toast.success(message === undefined ? "Sucess." : message)
}

const ErrorToast = (message) => {
    return toast.error(message === undefined ? "Error!" : message)
}

const PromiseToast = (resp) => {
    toast.promise(
        resp,
        {
            pending: 'Fatching data...',
            success: 'Data Fetch Success',
            error: 'Something went wrong!!'
        }
    )
}

export {SuccessToast, ErrorToast, PromiseToast}


/*const ToastMessage = () => {
    // return toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //     });
    const notify = () => {
        toast("Default Notification !");
    }
    return (<>
        <button onClick={notify}>Notify</button>
        <ToastContainer />
    </>)
}

export default ToastMessage;*/