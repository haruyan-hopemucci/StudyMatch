import React from "react";
import "../assets/styles/beginner.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

const Beginner = () => {
  return (
    <>
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

        <section>
          <h1>はじめての方へ</h1>
          <h3>①StudyMatchについて</h3>
          <p>
            StudyMatchは「家庭教師」と「生徒」をオンラインでマッチングするサービスです。
          </p>
          <h3>②こんな人におすすめ！</h3>
          こんな人がStudyMatchの利用に向いています。
          <ol>
            <li>とにかく安い料金で家庭教師を探したい人</li>
            <li>自分にあった先生と学習をすすめたい人</li>
            <li>大勢で勉強するのが苦手な人</li>
            <li> 契約期間が特に決まっていない人</li>
          </ol>
        </section>

        <section class="resister">
          <p>まずは会員登録をしよう!</p>
          <Button variant="contained" color="primary">
            <Link to="/signup" class="link">
              登録する
            </Link>
          </Button>
        </section>

        <Link to="/home">トップベージに戻る</Link>
      </body>
    </>
  );
};

export default Beginner;
