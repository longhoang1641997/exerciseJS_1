const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var activeTab = $('.tab-item.active')
var activeTabContent = $('.tab-pane.active')

const tabs = $$('.tab-item')
const tabContents = [...$$('.tab-pane')]
const line = $('.tabs .line')
console.log([line])
console.log([activeTabContent])
console.log(tabContents)

requestIdleCallback(function () {
    line.style.left = activeTab.offsetLeft + "px";
    line.style.width = activeTab.offsetWidth + "px";
});

tabs.forEach(function(tab, idx) {
    tab.onclick = function() {
        if(tab.classList.value === 'tab-item active') {
        }
        else{
            console.log('tab is not active so need to active, idx: ', idx)
            activeTab.classList.remove('active')
            activeTabContent.classList.remove('active')
            tab.classList.add('active')
            tabContents[idx].classList.add('active')
            line.style.left = tab.offsetLeft + "px";
            line.style.width = tab.offsetWidth + "px";
            activeTab = tab
            activeTabContent = tabContents[idx]

        }
    }
})