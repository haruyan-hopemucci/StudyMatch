import React from "react";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <body>
        <header class="classes.header">
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

        <section class="first-v">
          <p class="first-v-text">
            StudyMatchは「家庭教師」と「生徒」をオンラインでマッチングするサービスです。
            あなたにとって理想の先生をStudyMatchで見つけましょう。
          </p>
        </section>

        <section class="resister">
          <p>まずは会員登録をしよう!</p>
          <Button variant="contained" color="primary">
            <Link to="/signup" class="link">
              登録する
            </Link>
          </Button>

          <p>ログインはこちらから。</p>
          <Button variant="contained" color="primary">
            <Link to="/login" class="link">
              ログイン
            </Link>
          </Button>
        </section>

        {/* <section class="search">
          <p>会員登録が完了したら講師・生徒の検索をしてみよう！</p>
          <div class="search-container">
            <div class="search-s">
              <Button variant="contained" color="primary">
                <Link to="/student" class="link">
                  生徒を探す
                </Link>
              </Button>
            </div>

            <div class="search-t">
              <Button variant="contained" color="primary">
                <Link to="/teacher" class="link">
                  講師を探す
                </Link>
              </Button>
            </div>
          </div>
        </section> */}

        <footer></footer>
      </body>
    </>
  );
};

export default Home;
