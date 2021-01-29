let params = new URLSearchParams(location.search);

var user_name = document.createElement("p")
user_name.appendChild(document.createTextNode(params.get("name")))

var email = document.createElement("p")
email.appendChild(document.createTextNode(params.get("email")))

var phone = document.createElement("p")
phone.appendChild(document.createTextNode(params.get("phone")))

var message = document.createElement("p")
message.appendChild(document.createTextNode(params.get("message")))

document.getElementsByTagName("body")[0].appendChild(user_name)
document.getElementsByTagName("body")[0].appendChild(email)
document.getElementsByTagName("body")[0].appendChild(phone)
document.getElementsByTagName("body")[0].appendChild(message)