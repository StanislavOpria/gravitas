import { useTranslation } from "react-i18next";
import Typography from "../../../@common/components/Typography/Typography";
import s from "./Hero.module.scss";
function Hero() {
  const { t } = useTranslation();
  return (
    <section className={s.section}>
      <Typography variant="h1">{t("main").hero.title}</Typography>
      <ul className={s.list}>
        <li className={s.item}>
          <h2>{t("main").hero.subtitle1}</h2>
        </li>
        <li className={s.item}>
          <h2>{t("main").hero.subtitle2}</h2>
        </li>
        <li className={s.item}>
          <h2>{t("main").hero.subtitle3}</h2>
        </li>
      </ul>
      <a className={s.link} href="">
        {t("main").hero.link}
      </a>
    </section>
  );
}

export default Hero;
