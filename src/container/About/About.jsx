import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        <span>קצת עלי</span>
      </h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img className="profilePic" src={images.profile} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.logo2}
          alt="profile_circl"
        />
      </motion.div>
      <div className="app__profiles">
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          נעים להכיר,
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          שמי הדר ייני מעצבת פנים, בוגרת לימודי שנקר לעיצוב פנים, נשואה לעדי
          ואמא לרום הקטנה. במהלך חיי עולם העיצוב פגש אותי בהמון סיטואציות ולא
          היה לי ספק שזה המקצוע שארצה לעסוק בו. כשהתחלתי את הלימודים בשנקר, כבר
          אז הבנתי שאני במקום הנכון, שבחרתי את המקצוע המדויק עבורי. עולם העיצוב
          נוגע אצלי במקומות עמוקים ורגישים וככל שהזמן עובר אני מבינה כמה עיצוב
          הוא בלב שלי וחלק בלתי נפרד ממהות החיים שלי וממי שאני. אני מדברת עיצוב,
          נושמת עיצוב וחיה עיצוב. כשסיימתי בהצלחה את הלימודים בשנקר, בשנת 2020,
          התחלתי את דרכי בעולם המטבחים, בלב של הבית. העולם הזה פתח בפני אתגרים
          רבים והיווה עבורי למידה משמעותית והתמקצעות בתכנון מטבחים במשך כ-4 שנים
          שהיו מלאות בידע והנאה. אבל... בסופו של דבר תמיד ידעתי שאצא לדרך עצמאית
          שבה אוכל להביא לידי ביטוי את האני מאמין שלי ולממש את היכולות המקצועיות
          שלי יחד איתכם. שם העסק שלי, TOTO Design, מגיע מתוך הרגע המאושר בחיי
          ובחיי בעלי, הרגע שבו רום שלנו הגיעה לעולם ובתום לב עדי החליט שהכינוי
          שלה הוא טוטו. ברגע שפתחתי את העסק היה לי ברור שזה יהיה השם של העסק,
          שמגיע בדיוק מאותם המקומות, מעומק ליבי ונשמתי, מלווה בתשוקה, אהבה וחלום
          ענק שמתגשם.
        </p>
        {/* {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))} */}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "אודות",
  "app__whitebg"
);
