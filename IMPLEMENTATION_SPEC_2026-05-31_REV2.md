# LIFE OS 再改修 実装設計指示書

## 1. 目的

前回改修済みの `LIFE OS` に対して、今回追加で出た UI と運用ルールの修正要件をすべて反映する。

今回の改修テーマは次の 6 点。

1. `10mタイムマシン` 画面をさらにシンプルにする
2. 3年後の問いを 9 問に整理し、順番を固定する
3. 朝画面の文言と `金融ニュース` 導線を実運用向けに変える
4. `日中業務` という名称をすべて `タスク` に統一する
5. 夜ルーティン項目を整理し、不要項目を削除する
6. 出力機能を `Markdown` のみに絞り、`JSON` を完全撤去する

## 2. 前提

- この指示書は [IMPLEMENTATION_SPEC_2026-05-31.md](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/IMPLEMENTATION_SPEC_2026-05-31.md:1) の改訂版である
- 対象ファイルは [index.html](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/index.html:1)、[style.css](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/style.css:1)、[app.js](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/app.js:1)
- 既存の `localStorage` キーは維持する
- 既存ユーザーの保存データは壊さない
- `ChatGPT の記憶したプロンプトを送る` ことについては、Webアプリ単体で ChatGPT アプリ内部を操作するのではなく、`iPhoneショートカット` 起動を前提に実装する

## 3. 名称変更

### 3.1 画面・文言の変更

- UI 上の `日中業務` という文言はすべて `タスク` に変更する
- 対象:
  - `Day Ops` 画面タイトル
  - `Today` 画面の遷移ボタン
  - ナビゲーションの `Day Ops`
  - Night 進行制御のトースト文言
  - Logs / Markdown 内の見出し

### 3.2 衝突回避

`タスク` という画面名と、既存の `タスク` セクション名が衝突するため、実装上は次のように分ける。

- 画面名: `タスク`
- 画面内の個別タスクセクション名: `作業タスク`

この変更は UI だけに適用してよい。内部の保存キー `tasks` はそのままでよい。

## 4. 画面遷移

主要導線は引き続き以下とする。

`Mission Statement -> Today -> タスク -> Night`

ただし、2ページ目の Time Machine 画面には `Boot Sequence` の見出しを表示しない。

## 5. 10mタイムマシンの変更

## 5.1 上部見出し

`Mission Statement` 完了後に進む 2 ページ目では、以下を削除する。

- `Boot Sequence`
- `理想像に戻ってから、今日を起動する。`
- Step 管理を感じさせる余計な見出し

代わりに、Time Machine 画面の先頭は以下にする。

- タイトル: `10mタイムマシン`
- その直下にコンパクトなタイマー
- その下からすぐ質問開始

つまり、2ページ目は「タイトル -> タイマー -> 質問群」という順だけにする。

## 5.2 タイマーサイズ

現状の大型タイマーは大きすぎるので縮小する。

実装方針:

- タイマーカードの縦余白を減らす
- 数字サイズを現在より 25% から 35% 程度縮小する
- スマホでも視認できる最小サイズは維持する
- 固定タイマーとの二重表示になるため、大型タイマーは `ヒーロー表示` ではなく `操作UI` として扱う

推奨表示:

- 数字サイズは `clamp(2.2rem, 8vw, 3.6rem)` 程度
- Start ボタンは現状幅より少し短くしてよい

## 5.3 3年後の問い

Time Machine の問いは、現状の 12 項目から次の 9 項目に再編する。

表示順は必ず以下。

1. `何ができるようになっているか`
2. `何を重視しているか`
3. `どんな見た目をしているか`
4. `誰にどんな影響を与えているか`
5. `どこにいるか`
6. `どんな収入構造を持っているか`
7. `どんな作品・事業を生み出しているか`
8. `3年後の自分から今日の自分への一言`
9. `未来から逆算した今日の最重要アクション`

### 5.3.1 新しい保存キー

`futureVision` のキーは以下に置き換える。

```js
futureVision: {
  abilities: "",
  priorities: "",
  appearance: "",
  influence: "",
  place: "",
  incomeStructure: "",
  artAndBusiness: "",
  messageFromFutureSelf: "",
  todayActionFromFuture: ""
}
```

### 5.3.2 既存データの移行

旧キーを持つ過去ログは、次の方針でマイグレーションする。

- `abilities` は既存の `abilities` をそのまま引き継ぐ
- `place` は既存の `place` をそのまま引き継ぐ
- `influence` は既存の `influence` をそのまま引き継ぐ
- `incomeStructure` は既存の `incomeStructure` をそのまま引き継ぐ
- `artAndBusiness` は既存の `artAndBusiness` をそのまま引き継ぐ
- `messageFromFutureSelf` は既存の `messageFromFutureSelf` をそのまま引き継ぐ
- `todayActionFromFuture` は既存の `todayActionFromFuture` をそのまま引き継ぐ
- `priorities` は新規項目なので空文字初期化
- `appearance` は旧 `facialExpression` と `bodyCondition` を連結して初期化してよい

旧キーの `people` `activity` `words` などは、新 UI では表示しない。保存データに残っていてもよいが、入力UI・Markdown・Logs では参照しない。

## 6. Today 画面の文言変更

### 6.1 Handoff

次のラベルを変更する。

- `昨日の明日のNEXT ACTION` -> `今日のアクション`
- `昨日の明日のリマインド` -> `昨日のリマインド`

意味はそのまま、見え方だけを自然にする。

### 6.2 タスク画面への導線

`日中業務へ進む` は `タスクへ進む` に変更する。

## 7. 朝ルーティンの金融ニュース自動化

## 7.1 目的

朝ルーティンの `金融ニュース` は、単なるチェック項目ではなく「スマホでタップしたら ChatGPT に固定プロンプトを送る導線」に変える。

## 7.2 実装前提

LIFE OS の Web アプリ単体では、ChatGPT アプリ内部のメモリ済みプロンプトを直接呼び出したり、送信ボタンまでネイティブ制御することは前提にしない。

この要件は、`iPhoneショートカット` を起動する方式で満たす。

### 7.2.1 想定運用

ユーザー側で iPhone に `今朝のニュース送信` というショートカットを用意する。

LIFE OS からはそのショートカット URL を呼び出す。

ショートカット側の役割:

1. 固定文面 `今朝のニュース` を生成する
2. ChatGPT アプリまたは ChatGPT を使う導線へ渡す
3. 可能であれば自動送信まで実行する

### 7.2.2 LIFE OS 側の役割

LIFE OS 側は以下だけを担う。

1. ルーティン項目タップでショートカット URL を開く
2. 開いた時点で朝ルーティンを自動チェックする
3. URL 未設定時はトーストで案内する

## 7.3 Settings 追加項目

`links` に次を追加する。

```js
morningNewsShortcut: ""
```

初期値の推奨例:

```txt
shortcuts://run-shortcut?name=%E4%BB%8A%E6%9C%9D%E3%81%AE%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E9%80%81%E4%BF%A1
```

## 7.4 ルーティン項目の変更

`金融ニュース` は次の仕様に置き換える。

- ラベル候補: `今朝のニュース`
- 挙動: タップでショートカット起動
- 補助文言: `タップして送信`

`MORNING_ROUTINE_ITEMS` では `financeNews` に `linkKey: "morningNewsShortcut"` を持たせる。

## 7.5 フォールバック

ショートカットが未設定、または起動できない場合は次を行う。

- チェックを自動で入れない
- `今朝のニュース用ショートカットを設定してください` と表示する

## 8. タスク画面への名称統一

## 8.1 UI変更

以下をすべて `タスク` 表記に変える。

- ナビ `Day Ops` -> `タスク`
- 画面キッカー `Day Ops` -> `Task`
- 画面タイトル `日中業務を漏らさず整理する` -> `タスクを漏らさず整理する`
- Today ボタン `日中業務へ進む` -> `タスクへ進む`
- Night 進行失敗時トースト `日中業務の未整理項目...` -> `タスクの未整理項目...`
- Markdown 見出し `日中業務 / 連絡` など -> `タスク / 連絡` など
- Logs 見出し `日中業務` -> `タスク`

## 8.2 内部実装

`state.activeScreen` は `dayOps` のままでもよい。互換性優先で内部キーは変えなくてよい。

## 9. 夜ルーティンの変更

`NIGHT_ROUTINE_ITEMS` を次の内容へ更新する。

1. `3食`
2. `水500ml x 3`
3. `八段錦`
4. `1分読書`
5. `亜門売上報告`
6. `亜門マスターシート`
7. `家計簿`
8. `KPI Log 2026`

### 9.1 具体的変更

- `運動10分` -> `八段錦`
- `八段錦` の直下に `1分読書` を追加
- `アファメーションムービーを見る` を削除
- `Commit Log 2026` を削除

### 9.2 進捗率

夜ルーティンの総数変更に合わせて進捗率計算対象も更新する。

### 9.3 過去データ互換

過去ログに `affirmationMovie` や `commitLog` が残っていてもよいが、新 UI では表示しない。

## 10. Markdown 出力の変更

## 10.1 冒頭見出し

Markdown 出力の最初の見出しは、日付入りタイトルではなく固定で次に変更する。

```md
# LIFE GOAL
```

その直下に日付を置く場合は以下の形にする。

```md
## 2026-05-31
```

## 10.2 出力構造

Markdown には引き続き以下を含める。

- Mission Statement
- 10mタイムマシン
- 今週の目標
- 朝ルーティン
- 今日の最重要3つ
- タスク
- 支出メモ
- 夜ルーティン
- FB / 学び
- 明日のNEXT ACTION
- Good & New
- 承認・感謝
- 明日のリマインド
- メモ

## 11. JSON 機能の完全削除

## 11.1 削除対象

以下をすべて削除する。

- `JSON出力` ボタン
- `logs-json-button`
- `buildJson()`
- `exportCurrent("json")`
- `exportSelected("json")`
- Logs 詳細の `JSON Preview`
- Output panel の `JSON` タイトル分岐

## 11.2 アプリ内の読み方

アプリ内では `Markdown` を直接読む方式へ寄せる。

実装案:

- `Night` では `Markdown出力` のみ残す
- `Logs` でも `Markdown出力` のみ残す
- `output-panel` は Markdown 専用とする

## 11.3 AirDrop 導線

ユーザー要件に合わせて、Markdown をそのまま共有できる導線を追加する。

### 推奨実装

- `Markdown共有` ボタンを追加してよい
- `navigator.share()` が使える環境では共有シートを開く
- iPhone / iPad Safari では AirDrop を含む共有先へ渡せるようにする
- `navigator.share()` がない環境では `コピー` ボタンをフォールバックとする

共有内容は `.md` テキストとして扱う。

## 12. データ構造の変更

## 12.1 links

`DEFAULT_SETTINGS.links` に追加:

```js
morningNewsShortcut: ""
```

## 12.2 futureVision

`TIME_MACHINE_FIELDS` と `createDefaultDailyLog()` の `futureVision` を 9 項目版へ置き換える。

## 12.3 nightRoutine

`NIGHT_ROUTINE_ITEMS` を新リストへ更新する。

## 13. 実装タスク

### 13.1 [index.html](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/index.html:1)

- Time Machine 画面で `Boot Sequence` 的な見出しを出さない構成へ変更
- Time Machine の先頭に `10mタイムマシン` タイトルを置く
- `日中業務へ進む` を `タスクへ進む` に変更
- `Day Ops` ナビを `タスク` 表記へ変更
- `JSON出力` ボタンをすべて削除
- 必要なら `Markdown共有` ボタンを追加

### 13.2 [app.js](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/app.js:1)

- `TIME_MACHINE_FIELDS` の並びと項目数を更新
- `futureVision` マイグレーション処理を追加
- Handoff の 2 ラベルを変更
- `financeNews` を `morningNewsShortcut` 起動型に変更
- `DEFAULT_SETTINGS.links` に `morningNewsShortcut` を追加
- `NIGHT_ROUTINE_ITEMS` を差し替え
- `affirmationMovie` と `commitLog` 依存コードを削除
- Markdown 先頭を `# LIFE GOAL` に変更
- JSON 出力系関数を完全削除
- `navigator.share()` を使う共有関数を追加してよい
- `日中業務` 文言を `タスク` 系表記へ更新

### 13.3 [style.css](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/style.css:1)

- Time Machine タイトルまわりの余白を再調整
- 大型タイマーのサイズと余白を縮小
- `タスク` 画面への文言変更に伴うレイアウト崩れを確認
- JSON ボタン削除後のツールバー幅を整える

## 14. 受け入れ条件

以下をすべて満たしたら完了。

1. Time Machine 画面に `Boot Sequence` の見出しが出ない
2. Time Machine 画面の先頭が `10mタイムマシン -> タイマー -> 質問` の順になる
3. 大型タイマーが現状よりコンパクトになっている
4. 3年後の問いが 9 項目に整理され、指定順で表示される
5. `昨日の明日のNEXT ACTION` が `今日のアクション` に変わる
6. `昨日の明日のリマインド` が `昨日のリマインド` に変わる
7. 朝ルーティンのニュース項目がショートカット起動型に変わる
8. ショートカット未設定時はチェックせず、設定案内が出る
9. UI上の `日中業務` がすべて `タスク` に置き換わる
10. 夜ルーティンが `八段錦` と `1分読書` を含む新構成になる
11. `アファメーションムービー` と `Commit Log` が消える
12. Markdown 冒頭が `# LIFE GOAL` になる
13. JSON ボタン、JSON プレビュー、JSON ロジックがすべて消える
14. Markdown を共有シートに渡せる導線があるか、少なくともコピー導線が残る

## 15. 実装上の注意

- `ChatGPT の記憶したプロンプトを送る` 体験は、Web アプリ本体ではなく `iPhoneショートカット起動` に責務を分離する
- そのため、LIFE OS 側は `ショートカットを叩く` ところまでを責務とし、ChatGPT アプリ内部制御は前提にしない
- 旧 Time Machine フィールドは後方互換のため保存データ内に残ってもよいが、UI には再表示しない
- JSON 機能は中途半端に残さず、UI・関数・出力分岐をまとめて消す
- `タスク` という名称が画面名とセクション名で衝突するため、UI文言だけ `作業タスク` にして見分けをつける
