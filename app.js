
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


class VerifiedlyKYC extends HTMLElement {

    constructor(){

        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = content
    }
}

customElements.define("Verifiedly", VerifiedlyKYC)