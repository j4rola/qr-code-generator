
const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault()
    const url = document.getElementById('url').value 
    const size = document.getElementById('size').value 
    console.log(size, url)

    if (url === '') {

        alert("Please add a valid url")

    } else {
        
        showSpinner()
        hideQr()
        
        setTimeout(() => { 
            showQr()
            hideSpinner(); 
            generateCode(url, size);

        }, 1000)

    }
} 

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block'
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none'
}

const showQr = () => {
    qr.style.display = 'block'
}

const hideQr = () => {
    qr.style.display = 'none'
}



const generateCode = (url, size) => {
    
    qr.innerHTML = '' 

    const qrcode = new QRCode('qrcode', {

        text: url,
        width: size,
        height: size,

    })
    
}

hideSpinner()


form.addEventListener('submit', onGenerateSubmit)
