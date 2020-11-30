import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  return (
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
  // ーーーーーーーーーーーーーー『Header(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーー
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
  // ーーーーーーーーーーーーーー『Header(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <header class="sp-header">
          <h1 class="sp-title">Study Match</h1>
          <Breadcrumbs   class="icon" variant="contained" color="primary">
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
          <h2>お問い合わせ</h2>
          <p>ご質問がある方は、お気軽にお問い合わせください。</p>
        </div>
      </MediaQuery>

    {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Main(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <div class="sp-main">
          <h2>お問い合わせ</h2>
          <p>ご質問がある方は、お気軽にお問い合わせください。</p>
        </div>
      </MediaQuery>

      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Form(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(min-width:590px)">
        <form class="pc-form">
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="質問内容"
            multiline
            rows={7}
            defaultValue=""
            variant="outlined"
          />
           <br />
          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </form>
      </MediaQuery>

          {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
      // ーーーーーーーーーーーーーー『Form(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
      // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <form class="form">
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="質問内容"
            multiline
            rows={7}
            defaultValue=""
            variant="outlined"
          />
         <br/>
          <Button type="submit" variant="contained" color="primary">
             <div  class="btn-link">
              <p class="text">送信</p>
             </div>
            </Button>
        </form>
      </MediaQuery>
    </body>
  );
};

export default Contact;
