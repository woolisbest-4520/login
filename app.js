const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// ミドルウェア設定
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// セッション設定
app.use(session({
  secret: 'your-secret-key', // セッションの鍵
  resave: false,
  saveUninitialized: true,
}));

// ダミーのユーザー（本番ではデータベースを使うべき）
const user = {
  username: 'admin',
  password: 'password123',
};

// ログインページ
app.get('/login', (req, res) => {
  res.render('login');
});

// ログインフォーム送信
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect('/home');
  } else {
    res.send('Invalid credentials');
  }
});

// ホームページ（ログイン後）
app.get('/home', (req, res) => {
  if (req.session.loggedIn) {
    res.render('home', { username: req.session.username });
  } else {
    res.redirect('/login');
  }
});

// ログアウト
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});

// サーバー開始
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
