//assign modal
const kycModalBackground = document.querySelector('.kyc_modal_background')
//assign button
const redirectBtn = document.querySelector('.redirect_btn')


const initialize = ()=>{

    
}
//add eventlistener to button that initializes the modal and kyc process
redirectBtn.addEventListener('click', ()=>{

    kycModalBackground.classList.add('showModal')
})