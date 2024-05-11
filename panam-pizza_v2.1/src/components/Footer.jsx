import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer"><div className="container"><div className="footer__top"><a href="/" className="logo"><img width="38" src="img/dodo-logo.jpg" alt="Pizza logo" /><h2>ДОДО ПИЦЦА</h2></a><div className="footer__phone"><a className="footer__number" href="tel:+88007006163">8 800-700-61-63</a><p className="footer__phone-text">Заказать по телефону</p></div></div><div className="footer__main"><ul className="footer__list"><li className="footer__item item-footer"><h3 className="item-footer__title">Компания</h3><ul className="item-footer__list"><li className="item-footer__item"><a href="" className="item-footer__link">О нас</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Поставщикам</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Арендодателям</a></li></ul></li><li className="footer__item item-footer"><h3 className="item-footer__title">Гостям</h3><ul className="item-footer__list"><li className="item-footer__item"><a href="" className="item-footer__link">Качество</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Состав и калорийность блюд</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Аллергены</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Правовая информация</a></li></ul></li><li className="footer__item item-footer"><h3 className="item-footer__title">Ресторан и доставка</h3><ul className="item-footer__list"><li className="item-footer__item"><a href="" className="item-footer__link">Адреса ресторанов</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Условия доставки</a></li></ul></li><li className="footer__item item-footer"><h3 className="item-footer__title">Наши сообщества</h3><ul className="item-footer__list"><li className="item-footer__item"><a href="" className="item-footer__link">Инстаграм</a></li><li className="item-footer__item"><a href="" className="item-footer__link">Вконтакте</a></li></ul></li></ul></div><div className="footer__bottom bottom-footer"><div className="bottom-footer__content"><p className="bottom-footer__descr">Мы заботимся о том, <br />чтобы сделать ваш отдых особенным</p></div><div className="bottom-footer__copyright"><p className="bottom-footer__policy">© 2024 ДОДО ПИЦЦА. Все права защищены</p></div></div></div></footer>
    </>
  );
}

export default Footer;