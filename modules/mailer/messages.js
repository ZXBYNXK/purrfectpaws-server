module.exports = messages = {    
    default: (subject, message) => {
        return `<div style="display:flex; flex-direction:column"><h1>${subject}<h1><p>${message}</p</div>`
    }
}