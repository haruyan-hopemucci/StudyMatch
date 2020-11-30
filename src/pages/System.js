import React from "react";
import "../assets/styles/system.css";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const System = () => {
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
              <Link color="inherit" to="/" class="link">
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
              <Link color="inherit" to="/" class="link">
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
            <Breadcrumbs   class="icon"  variant="contained" color="primary">
              <Link color="inherit" to="/" class="link">
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
  // ーーーーーーーーーーーーーー『Main(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(min-width:590px)">
          <div class="main">
            <h2>ご利用の流れ</h2>

            <ol>
              <li>講師登録・生徒登録</li>
              <li>プロフィールを入力</li>
              <li>条件に合う講師・生徒を探す</li>
              <li>双方の「いいね！」によりマッチング</li>
              <li>メッセージ開始</li>
            </ol>
          </div>
        </MediaQuery>


 {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Main(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width:590px)">
          <div class="sp-main">
            <h2>ご利用の流れ</h2>

            <ol>
              <li>講師登録・生徒登録</li>
              <li>プロフィールを入力</li>
              <li>条件に合う講師・生徒を探す</li>
              <li>双方の「いいね！」によりマッチング</li>
              <li>メッセージ開始</li>
            </ol>
          </div>
        </MediaQuery>
      </body>
    </>
  );
};

export default System;
