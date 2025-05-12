import './tg.css'


function Tg() {
    return (
        <section className="tg__container">
            <div className="left__th">
                <h2 className="logo__tg">Ваш контроль</h2>
                <p className="text__tg">Нам важно, чтобы <span className="span__tg">вы были спокойны </span>за своего
                    ребенка, поэтому: </p>
                <div className="block__tg">
                    <img className="img__tg" src="./img/tg/image20.svg" alt=""/>
                    <p className="text__tg">мы создали телеграмм-канал,
                        который ведем в течение дня:</p>
                </div>
                <p className="text__tg">Сюда снимаем кружочки
                    с нашими юными программистами </p>

                <p className="text__tg"> А также выкладываем фото и видео
                    с прогулок, с уроков, с обеда, с игр и т.д.
                </p>
            </div>
            <div className="right__tg">
                <img className="circlee" src="./img/tg/Group145.png" alt="tg"/>
                <button className="btn__tg">ПОДПИСАТЬСЯ</button>
            </div>
        </section>
    )
}

export default Tg;
