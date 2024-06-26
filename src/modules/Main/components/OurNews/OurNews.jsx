import Typography from "../../../@common/components/Typography/Typography";

function OurNews() {
  return (
    <section>
  
                  <Typography variant="h2">Наши новости</Typography>
      <ul>
        <li>
          <p>Налоговое право</p>
          <img src="" alt="Новость" />
          <p>20 марта 2020</p>
          <h3>В чем же проблема возмещение НДС и как с ней бороться ?</h3>
        </li>
        <li>
          <p>Криминальное право</p>
          <img src="" alt="Новость" />
          <p>20 марта 2020</p>
          <h3>
            Как обязать орган досудебного расследования закрыть уголовное дело?
          </h3>
        </li>
        <li>
          <p>Гражданское право</p>
          <img src="" alt="Новость" />
          <p>20 марта 2020</p>
          <h3>
            Возместить убытки нанесенные органом досудебного расследования можно
            !
          </h3>
        </li>
      </ul>
      <a href="">Узнать больше</a>
    </section>
  );
}

export default OurNews;
