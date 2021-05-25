
let header = Vue.component('header-comp', {
    template: `
    <header class="header">
            <div class="container">
                <div class="header__inner">
                <div class="header__logo">
                <img src="./img/logo.svg" alt="logo">
                <h3>Devias Kit</h3>
                </div>
                    <div class="header__icons">
                        <img src="./img/notification.svg" alt="icon">
                        <img src="./img/exit.svg" alt="icon">
                    </div>
                </div>
            </div>
        </header>
    `
})
let aside = Vue.component('aside-comp', {
    template: `
    <aside class="aside">
                        <div class="aside__user">
                            <img src="./img/user-img.png" alt="user">
                            <h2>Roman Kutepov</h2>
                            <p>Brain Director</p>
                        </div>
                        <span class="aside-line"></span>
                        <div class="aside__menu">
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-1.svg" alt="aside">
                                Dashboard
                            </a>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-2.svg" alt="aside">
                                Users
                            </a>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-3.svg" alt="aside">
                                Products
                            </a>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-4.svg" alt="aside">
                                Authentication
                            </a>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-5.svg" alt="aside">
                                Typography
                            </a>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-6.svg" alt="aside">
                                Icons & Images
                            </a>
                        </div>
                        <span class="aside-line"></span>
                        <div class="aside__support">
                            <h3>Support</h3>
                            <a href="#" class="aside__menu__link">
                                <img src="./img/aside-icon-7.svg" alt="aside">
                                Support
                            </a>
                        </div>
                    </aside>
    `
})

let app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 'DEV08801335',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV04380234',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
            {
                id: 'DEV08801111',
                name: 'Adam Denisov',
                number: '7-(648)993-5934',
                mail: 'belliott@youspan.mil',
                date: '04/28/2018'
            },
        ]
    },
    components: {
        header: header,
        aside: aside,
    },
    methods: {
        saveForm() {
          this.request('../index2.html', { }, () => {});
    
          this.$router.push('/');
          location.reload();
        },
      },
})