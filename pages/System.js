import React from "react";
import "../assets/styles/system.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

const System = () => {
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
          <h2>料金について</h2>
          <p>
            マッチング後のメッセージのやり取りを開始する際に有料会員登録する必要があります。
            有料会員登録料は月々3000円です。
          </p>

          <h2>ご利用の流れ</h2>

          <system>
            <ol>
              <li>講師登録・生徒登録</li>
              <li>プロフィールを入力</li>
              <li>条件に合う講師・生徒を探す</li>
              <li>双方の「いいね！」によりマッチング</li>
              <li>メッセージ開始</li>
            </ol>
          </system>
        </section>
        <Link to="/home">トップベージに戻る</Link>
      </body>
    </>
  );
};

export default System;
