import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typography from "../../../@common/components/Typography/Typography";
import s from "./OurPractices.module.scss";

function OurPractices() {
  const { t } = useTranslation();
  return (
    <section className={s.practice}>
      <Typography variant="h2">{t("main").practices.title}</Typography>
      <p className={s.subtitle}>{t("main").practices.subtitle}</p>
      <ul className={s.list}>
        <li>
          <Link to="/practices" className={s.link}>
            {t("main").practices.list.item1}
          </Link>
        </li>
        <li>
          <Link to="/practices" className={s.link}>
            {t("main").practices.list.item2}
          </Link>
        </li>
      </ul>

      <img src="" alt={t("main").practices.imgAlt} />
    </section>
  );
}

export default OurPractices;
