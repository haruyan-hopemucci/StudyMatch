import React from "react";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import { Button, Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Home = () => {
  return (
    <>
      <body>
        {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        <MediaQuery query="(min-width: 960px)">
          <header class="pc-header">
            <h1 class="pc-title">Study Match</h1>
            <Breadcrumbs
              class="nav"
              variant="contained"
              color="primary"
              aria-label="breadcrumb"
            >
              <Link color="inherit" to="/home" class="link">
                ホーム
              </Link>
              <Link color="inherit" to="/beginner" class="link">
                はじめての方へ
              </Link>
              <Link color="inherit" to="/system" class="link">
                システム
              </Link>
              <Link color="textPrimary" to="/contact" class="link">
                お問い合わせ
              </Link>
            </Breadcrumbs>
          </header>
        </MediaQuery>

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width: 960px) and (min-width: 590px)">
          <header class="tab-header">
            <h1 class="tab-title">Study Match</h1>
            <Breadcrumbs
              class="nav"
              variant="contained"
              color="primary"
              aria-label="breadcrumb"
            >
              <Link color="inherit" to="/home" class="link">
                <HomeIcon style={{ fontSize: 35 }} />
              </Link>
              <Link color="inherit" to="/beginner" class="link">
                <FaceIcon style={{ fontSize: 35 }} />
              </Link>
              <Link color="inherit" to="/system" class="link">
                <SettingsIcon style={{ fontSize: 35 }} />
              </Link>
              <Link color="textPrimary" to="/contact" class="link">
                <MailOutlineIcon style={{ fontSize: 35 }} />
              </Link>
            </Breadcrumbs>
          </header>
        </MediaQuery>


     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width:590px)">
          <header class="sp-header">
            <h1 class="sp-title">Study Match</h1>
            <Breadcrumbs 
            class="icon"
            variant="contained" color="primary">
              <Link color="inherit" to="/home" class="link">
                <HomeIcon style={{ fontSize: 30 }} />
              </Link>
              <Link color="inherit" to="/beginner" class="link">
                <FaceIcon style={{ fontSize: 30 }} />
              </Link>
              <Link color="inherit" to="/system" class="link">
                <SettingsIcon style={{ fontSize: 30 }} />
              </Link>
              <Link color="textPrimary" to="/contact" class="link">
                <MailOutlineIcon style={{ fontSize: 30 }} />
              </Link>
            </Breadcrumbs>
          </header>
        </MediaQuery>

        {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『First-View(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(min-width: 960px)">
          <section class="pc-first-v">
            <div class="pc-first-t">
              <p>
                StudyMatchは「家庭教師」と「生徒」をオンラインでマッチングするサービスです。
                あなたにとって理想の先生をStudyMatchで見つけましょう。
              </p>
            </div>
          </section>
        </MediaQuery>

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『First-View(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width: 960px) and (min-width: 590px)">
          <section class="tab-first-v">
            <div class="tab-first-t">
              <p>
                StudyMatchは「家庭教師」と「生徒」をオンラインでマッチングするサービスです。
                あなたにとって理想の先生をStudyMatchで見つけましょう。
              </p>
            </div>
          </section>
        </MediaQuery>

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『First-View(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width: 590px)">
          <section class="sp-first-v">
            <div class="sp-first-t">
              <p>
                StudyMatchは「家庭教師」と「生徒」をオンラインでマッチングするサービスです。
                あなたにとって理想の先生をStudyMatchで見つけましょう。
              </p>
            </div>
          </section>
        </MediaQuery>

        {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Signup & Login(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(min-width: 960px)">
          <section class="resister-pc">
            <p>まずは会員登録をしよう!</p>
            <Button variant="contained" color="primary">
              <Link to="/signup" class="btn-link">
              <p class="text">登録する</p>
              </Link>
            </Button>

            <p>ログインはこちらから。</p>
            <Button variant="contained" color="primary">
              <Link to="/login" class="btn-link">
             <p class="text">ログイン</p>
              </Link>
            </Button>
          </section>
        </MediaQuery>


     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Signup & Login(タブレット・スマホサイズ)』ーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}


        <MediaQuery query="(max-width: 960px)">
          <section class="resister-sp">
            <p>まずは会員登録をしよう!</p>
            <Button variant="contained" color="primary">
            <Link to="/signup" class="btn-link">
            <p class="text">登録する</p>
              </Link>
            </Button>

          

            <p>ログインはこちらから。</p>
            <Button variant="contained" color="primary">
              <Link to="/login" class="btn-link">
              <p class="text">ログイン</p>
              </Link>
            </Button>
          </section>
        </MediaQuery>

        


      </body>
    </>
  );
};

export default Home;
