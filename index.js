const ipMap = new Map()
ipMap.set('54.221.159.189', 'connect-button1')

const pingServer = async (ip) => {
    try{
        const serverResponse = await fetch("http://" + ip + "");
        console.log(serverResponse)
        let element = document.getElementById(ipMap.get(ip))
        if (serverResponse.status == 200){
            element.style.borderColor = "green"
        }
    } catch (err) {
        let element = document.getElementById(ipMap.get(ip))
        element.style.borderColor = "red"
    }
}
