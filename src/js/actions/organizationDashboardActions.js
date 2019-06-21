const OPEN_MODAL='OPEN_MODAL';

export default {
    openModal:()=>{
        return{
            type:OPEN_MODAL,
            isModalOpen: true
        }
    }
}