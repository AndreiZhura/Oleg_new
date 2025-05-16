<section class="top" id="main">
    <h1 class="top__title">
        <span class="top__title top__title_color">Не тратьте</span> свое время
        на подбор кондиционера,
        <span class="top__title top__title_color">мы сделаем это за Вас!</span>
    </h1>
    <p class="top__subtitle">
        Проводим бесплатные консультации и помогаем сделать правильный выбор
    </p>
    <div class="top__ball"></div>
    <div class="form-and-nav">
        <form class="top__form" method="POST" action="/src/blockphp/telegram.php">
            <input
                class="top__input"
                required="required"
                pattern="\8\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                minlength="11"
                maxlength="11"
                placeholder="8(___)___-__-__"
                type="tel"
                name="phone"
                id="Request_A_Call" />

            <button class="top__button" type="submit">
                Получить консультацию
            </button>
            <p class="top__text">
                Оставьте заявку и мы свяжемся с Вами в ближайшее время
            </p>
        </form>
        <div class="air__conditioner"></div>
        <nav class="top__column top__column_content_social">
            <ul class="top__column-links">
                <li>
                    <a
                        class="top__column-link top__column-link-telegramm"
                        href="https://t.me/Oleg_split"
                        target="_blank"><img
                            class="top__social-icon"
                            src="./images/bxl_telegram.svg"
                            alt="telegramm" /></a>
                </li>
                <li>
                    <a
                        class="top__column-link top__column-link-whatsup"
                        href="https://wa.me/message/3CCFBCJ45BJFN1"
                        target="_blank"><img
                            class="top__social-icon"
                            src="./images/whatsUp.svg"
                            alt="Вконтакте" /></a>
                </li>
                <li>
                    <a
                        class="top__column-link top__column-link-vkontakte"
                        href="https://vk.com/public199520316"
                        target="_blank"><img
                            class="top__social-icon"
                            src="./images/vkontakte.svg"
                            alt="Инстаграм" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</section>