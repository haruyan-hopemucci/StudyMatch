import React from "react";
import "../assets/styles/beginner.css";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Beginner = () => {
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
            <Breadcrumbs
            class="icon"
             variant="contained" color="primary">
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
  // ーーーーーーーーーーーーーー『Main(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(min-width:590px)">
          <div class="main">
            <h2>はじめての方へ</h2>
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
          </div>
        </MediaQuery>

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Main(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <MediaQuery query="(max-width:590px)">
          <div class="sp-main">
            <h2>はじめての方へ</h2>
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
          </div>
        </MediaQuery>
      </body>
    </>
  );
};

export default Beginner;
