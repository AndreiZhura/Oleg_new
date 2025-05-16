
<section class="connect">
        <div class="container">
          <div class="container__test">
            <h3 class="container__title">Сложно и непонятно?</h3>
            <p class="container__subtitle">
              Пройдите короткий тест, и все станет намного проще
            </p>
            <div class="test-form">
              <input class="input__text" type="text" placeholder="Ваше имя" />
              <input
                class="input__tell"
                type="tel"
                placeholder="8(___)___-__-__"
                name="phone"
              />
              <a class="choice-condicioner__anchor-link" href="#test-popup">
                <button class="button__test">Пройти тест</button>
              </a>
            </div>
          </div>
          <div class="container__img">
            <img
              class="container__image"
              src="./images/endAir.svg"
              alt="Кондиционеры"
            />
          </div>
          <div class="end__block">
            <nav class="top__column top__column_content_social top__column_end">
              <ul class="top__column-links">
                <li>
                  <a
                    class="top__column-link top__column-link-telegramm"
                    href="https://t.me/Oleg_split"
                    target="_blank"
                  >
                    <img
                      class="top__social-icon"
                      src="./images/bxl_telegram.svg"
                      alt="telegramm"
                    />
                  </a>
                </li>
                <li>
                  <a
                    class="top__column-link top__column-link-whatsup"
                    href="https://wa.me/message/3CCFBCJ45BJFN1"
                  >
                    <img
                      class="top__social-icon"
                      src="./images/whatsUp.svg"
                      alt="Ватсап"
                    />
                  </a>
                </li>
                <li>
                  <a
                    class="top__column-link top__column-link-vkontakte"
                    href="https://vk.com/public199520316"
                    target="_blank"
                  >
                    <img
                      class="top__social-icon"
                      src="./images/vkontakte.svg"
                      alt="vkontakte"
                    />
                  </a>
                </li>
              </ul>
            </nav>
            <form
              class="top__form top__form_end"
              method="POST"
              action="./telegram.php"
            >
              <input
                class="top__input input_end"
                type="tel"
                required="required"
                placeholder="8(___)___-__-__"
                name="phone"
              />
              <button class="top__button top__button_end">
                Заказать звонок
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>