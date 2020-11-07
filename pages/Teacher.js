import React from "react";
import "../assets/styles/teacher.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";

const Teacher = () => {
  return (
    <body>
      <header>
        <h1 class="title">Study Match</h1>

        <ButtonGroup
          class="nav"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>
            <Link to="/beginner" class="link">
              はじめての方へ
            </Link>
          </Button>
          <Button>
            <Link to="/system" class="link">
              システム
            </Link>
          </Button>

          <Button>
            <Link to="/contact" class="link">
              お問い合わせ
            </Link>
          </Button>
        </ButtonGroup>
      </header>

      <div class="inner">
        <h2>講師一覧</h2>

        <div class="teacher-list">
          <div class="teacher">
            <img src={img1} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>

          <div class="teacher">
            <img src={img2} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>

          <div class="teacher">
            <img src={img3} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>

          <div class="teacher">
            <img src={img1} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>

          <div class="teacher">
            <img src={img2} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>

          <div class="teacher">
            <img src={img3} alt="img" />
            <ul>
              <li>名前：</li>
              <li>年齢：</li>
              <li>地域(県)：</li>
              <li>地域(市町村)：</li>
              <li>学歴：</li>
              <li>指導可能科目：</li>
            </ul>
            <p>自己紹介</p>
            <p>
              コミュニケーションも含め、男女問わずどんな学年のお子様にも対応することができます。高校生については文系を主に教えていたので、特に英文法、古文文法についてはエキスパートです。
            </p>
            <Button variant="contained" color="secondary">
              <Link to="/teacherprofile" class="link">
                いいね！
              </Link>
            </Button>
          </div>
        </div>
        <Link to="/home">トップベージに戻る</Link>
      </div>
    </body>
  );
};

export default Teacher;
