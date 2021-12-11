import browser from 'webextension-polyfill'

browser.action.onClicked.addListener((tab) => {
    console.log('hello world!')
})

export { }