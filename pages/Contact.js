import React from "react";
import "../assets/styles/contact.css";
import { Link } from "react-router-dom";
import { TextField, Button, ButtonGroup } from "@material-ui/core";

const Contact = () => {
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

      <section>
        <h1>お問い合わせ</h1>
        <p>ご質問がある方は、お気軽にお問い合わせください。</p>
      </section>

      <form>
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="質問内容"
          multiline
          rows={7}
          defaultValue=""
          variant="outlined"
        />
        <p>
          <input type="submit" value="送信" />
        </p>
      </form>

      <Link to="/home">
        <p>トップベージに戻る</p>
      </Link>
    </body>
  );
};

export default Contact;
