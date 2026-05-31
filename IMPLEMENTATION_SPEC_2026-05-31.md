# LIFE OS 追加改修 実装設計指示書

## 1. 目的

既存の `LIFE OS` を、朝の設計だけで終わらず「日中に発生した業務を漏らさず回収し、未完了を明日に確実に引き継ぐ」運用に拡張する。

今回のゴールは次の 4 点。

1. ヘッダーと保存導線を整理し、視認性と操作性を改善する
2. `10mタイムマシン` に上部固定の小型タイマーを追加する
3. `Today` と `Night` の間に `日中業務 / Day Ops` 画面を新設する
4. 日中タスクの未完了分を `明日のリマインド` と翌日の To Do に自動で引き継ぐ

## 2. 前提

- 対象ファイルは [index.html](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/index.html:1)、[style.css](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/style.css:1)、[app.js](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/app.js:1)
- quoted title が空欄だった新規画面名は、実装上 `日中業務 / Day Ops` とする
- 既存の `localStorage` キー `lifeOS_dailyLogs` と `lifeOS_settings` は維持する
- 既存ユーザーの保存データを壊さないよう、追加データはすべて後方互換のあるマージで導入する

## 3. 画面遷移

最終的な主要導線は以下。

`Boot Sequence -> Today -> Day Ops -> Night`

補助画面はそのまま維持する。

- `Logs`
- `Settings`

### 遷移ルール

- `Boot` 完了後は `Today` に入る
- `Today` 下部の主ボタンは `夜ルーティンへ進む` ではなく `日中業務へ進む` に変更する
- `Day Ops` 下部の主ボタンで `Night` へ進む
- `Night` には、`Day Ops` 内の未整理項目が残っている限り進めない
- `未整理` とは、各項目の状態が `open` のまま残っていることを指す

## 4. ヘッダーと固定 UI

### 4.1 ヘッダー

- ヘッダー右上の `保存` ボタンは削除する
- 日付表示は 1 行にまとめる
- 表記例は `2026年5月31日 (日)` のように、日付と曜日が横並びで一目で読める形にする
- `Wake the vision. Run the day.` は残してよいが、日付領域との横幅バランスを優先する

### 4.2 固定保存ボタン

- 画面右下に小型の `保存する` フローティングボタンを常設する
- 対象画面は `Today / Day Ops / Night / Settings / Time Machine`
- `Logs` では不要
- ボタンは丸みのある小型 FAB にし、`bottom: env(safe-area-inset-bottom) + 20px` 相当でスマホのホームバーと干渉させない
- クリック時は既存と同じ保存処理を呼び、トースト表示を出す
- 既存の自動保存は維持する。フローティング保存は安心感のための明示操作

### 4.3 固定タイマー

- `10mタイムマシン` 画面に、上部固定の小型タイマーを追加する
- 大型タイマーは既存どおり画面内に置き、小型タイマーは常時トップに固定表示する
- 表示形式は `10m Time Machine 08:42` のようなコンパクトな横長ピルでよい
- `timeMachine` ステップ以外では非表示
- タイマー終了時は色を切り替え、`00:00` を明確に見せる
- 1 秒更新では小型タイマーと大型タイマーのテキストのみを更新し、フォーム DOM は再生成しない

## 5. Today 画面の変更

### 5.1 ボタンとレイアウト

- 下部主ボタンを `日中業務へ進む` に変更する
- `保存する` ボタンはツールバーから削除する。保存導線は右下 FAB に統一する

### 5.2 進捗バー

- 既存の上部固定 `今日の進捗` は維持する
- `Day Ops` でも同様に上部固定されるよう対象画面を拡張する

## 6. 新規画面: Day Ops / 日中業務

## 6.1 役割

朝に設計した 1 日を運用する中で、突発業務や後回しになりやすい連絡を漏れなく回収するための画面。

## 6.2 レイアウト

`Day Ops` 画面は以下の順で構成する。

1. 画面ヘッダー
2. 引き継ぎ To Do サマリー
3. `連絡`
4. `121日程調整`
5. `タスク`
6. `支出メモ`
7. `Night` 遷移ボタン

### 6.3 引き継ぎ To Do サマリー

- 前日から引き継いだ未完了項目を画面上部にまとめて表示する
- 表示対象は `連絡 / 121日程調整 / タスク`
- ここでは一覧の要約だけを見せ、詳細編集は各セクションで行う
- サマリー文言例:
  - `連絡 2件を引き継ぎ`
  - `121日程調整 1件を引き継ぎ`
  - `タスク 3件を引き継ぎ`

### 6.4 セクション: 連絡

入力項目:

- `名前`
- `ツール`
- `要件`

追加仕様:

- 1 行フォームで即追加できる形にする
- `ツール` は自由入力でもよいが、初期プレースホルダに `LINE / FB / Instagram / 電話` を示す
- 追加後はカード一覧で表示する

1 件ごとの状態は次の 3 つ。

- `open`: まだ対応方針を決めていない
- `done`: 送信済み、対応完了
- `carryOver`: 今日中はやらず明日に回す

各カードの操作:

- `完了`
- `明日に回す`
- `戻す`
- `削除`

### 6.5 セクション: 121日程調整

入力項目:

- `名前`
- `その人の仕事`
- `連絡ツール`

表示・状態・操作は `連絡` と同一ルールにする。

### 6.6 セクション: タスク

入力項目:

- `作業`
- `ゴール`
- `何分かかるか`
- `いつやるか`

仕様:

- `何分かかるか` は数値入力でよい
- `いつやるか` は自由入力でよい
  - 例: `14:30`, `営業後`, `移動中`, `今日中`

表示カードには次を載せる。

- 作業名
- ゴール
- 所要時間
- 実行タイミング
- 状態バッジ

状態と操作は `連絡` と同じ。

### 6.7 セクション: 支出メモ

- 単一の大きめ `textarea` を置く
- ラベルは `支出メモ`
- プレースホルダは `発生した支出を雑にメモしておく`
- ここは完了判定の対象にしない

## 7. Night への遷移ルール

`Day Ops` から `Night` に進むには、`連絡 / 121日程調整 / タスク` の全件が `done` または `carryOver` になっている必要がある。

### 7.1 禁止条件

以下のいずれかが残っている場合、`Night` への遷移ボタンは無効化する。

- `open` 状態の `連絡`
- `open` 状態の `121日程調整`
- `open` 状態の `タスク`

### 7.2 補助表示

- ボタン近くに `未整理 3 件` のような件数表示を出す
- 未整理件数が 0 件になったら `Night` へ進める

### 7.3 意図

これにより「今日やる」「明日に回す」の意思決定を必ず通し、漏れを防ぐ。

## 8. データ設計

`createDefaultDailyLog(date)` に以下を追加する。

```js
dayOps: {
  contacts: [],
  schedule121: [],
  tasks: [],
  expenseMemo: "",
  carryOverSummaryDismissed: false
}
```

各配列要素の推奨スキーマは以下。

### 8.1 連絡

```js
{
  id: "string",
  type: "contact",
  name: "",
  tool: "",
  requirement: "",
  status: "open", // open | done | carryOver
  sourceDate: "YYYY-MM-DD",
  carriedOverFrom: null,
  carriedForwardTo: null,
  createdAt: "ISO",
  updatedAt: "ISO",
  completedAt: null
}
```

### 8.2 121日程調整

```js
{
  id: "string",
  type: "schedule121",
  name: "",
  job: "",
  tool: "",
  status: "open",
  sourceDate: "YYYY-MM-DD",
  carriedOverFrom: null,
  carriedForwardTo: null,
  createdAt: "ISO",
  updatedAt: "ISO",
  completedAt: null
}
```

### 8.3 タスク

```js
{
  id: "string",
  type: "task",
  title: "",
  goal: "",
  estimatedMinutes: "",
  when: "",
  status: "open",
  sourceDate: "YYYY-MM-DD",
  carriedOverFrom: null,
  carriedForwardTo: null,
  createdAt: "ISO",
  updatedAt: "ISO",
  completedAt: null
}
```

## 9. 持ち越しルール

### 9.1 今日の終了時

ユーザーが `Day Ops` 上で項目を `carryOver` にした時点では、その場では当日ログ内の状態変更だけ行う。

### 9.2 翌日ログ生成時

新しい日付のログを初期化するタイミングで、前日ログから以下を引き継ぐ。

- `contacts` のうち `status === "carryOver"` のもの
- `schedule121` のうち `status === "carryOver"` のもの
- `tasks` のうち `status === "carryOver"` のもの

引き継ぎ先では以下のルールで複製する。

- 新しい当日ログの対応配列にコピーする
- コピー先の `status` は `open` に戻す
- `carriedOverFrom` に元の日付を入れる
- 元データ側の `carriedForwardTo` に新しい日付を入れる

### 9.3 重複防止

同じ項目を何度も翌日に複製しないよう、`carriedForwardTo` がすでに当日日付なら再複製しない。

### 9.4 明日のリマインド生成

前日ログの `tomorrowReminder` に、`carryOver` 指定された項目を自動で人間向けテキストとして追記する。

文言例:

- `連絡: 田中さん / LINE / 契約確認`
- `121日程調整: 佐藤さん / 美容師 / FB`
- `タスク: 週報作成 / 30分 / 営業後`

追記条件:

- 同じテキストがすでに `tomorrowReminder` に存在する場合は重複追加しない

### 9.5 翌日の To Do

翌日の To Do は、翌日ログの `Day Ops` 配列そのものとする。

つまり、前日からの未完了項目は翌日 `Day Ops` 画面に最初から並んでいる状態を正とする。

## 10. 進捗率の定義変更

既存進捗率に `Day Ops` を含める。

計算方針:

- `open` は未達成
- `done` は達成
- `carryOver` は「今日の整理完了」とみなし達成扱い

これにより、夜に進む前に「やる or 持ち越す」が決まっていれば進捗が上がる。

## 11. エクスポートとログ表示

`Markdown出力 / JSON出力 / Logs詳細` には `Day Ops` の内容も含める。

最低限追加する項目:

- `連絡`
- `121日程調整`
- `タスク`
- `支出メモ`

`Logs` 画面のプレビューでも、日中の持ち越し判断が追えるよう状態を見せる。

## 12. 実装タスク

### 12.1 [index.html](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/index.html:1)

- ヘッダーの `quick-save-button` を削除
- 小型固定タイマー DOM を追加
- 右下固定保存ボタン DOM を追加
- `today-screen` の主ボタン文言を `日中業務へ進む` に変更
- `day-ops-screen` を新規追加
- `app-nav` に `Day Ops` タブを追加
- `today-screen` と `night-screen` のローカル保存ボタンを削除

### 12.2 [app.js](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/app.js:1)

- `createDefaultDailyLog` に `dayOps` を追加
- 過去データを壊さないマージ処理を維持したまま新項目を hydration
- `renderDayOps()` を新設
- `showScreen()` と `renderScreenVisibility()` に `dayOps` を追加
- `calculateProgress()` に `Day Ops` を加算
- `startTimer()` の更新対象に小型固定タイマーを追加
- `persistDailyLogs()` の前後で `carryOver` から `tomorrowReminder` を生成する補助関数を追加
- 新規項目追加、状態更新、削除、持ち越し判定のハンドラを追加
- 新しい日付ログを作るタイミングで `inheritCarryOverItems(previousLog, currentLog)` を実行

### 12.3 [style.css](/Users/kazumatanigawa/Desktop/Obsidian/My%20vault/%E2%85%A5.%20AI%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88/life-os/style.css:1)

- ヘッダーの日付を 1 行で整える
- 上部固定タイマーのスタイルを追加
- 右下固定保存 FAB を追加
- `Day Ops` 用のカード、フォーム、状態バッジ、サマリー UI を追加
- スマホ幅で入力欄が縦積みになるようにする
- 固定進捗バー、固定タイマー、固定保存 FAB が互いに重ならない余白設計にする

## 13. 受け入れ条件

以下をすべて満たしたら完了。

1. ヘッダー右上の保存ボタンが消え、日付と曜日が 1 行で見やすく表示される
2. 右下に小型の固定保存ボタンが出る
3. `10mタイムマシン` で小型タイマーが上部固定表示される
4. `Today -> Day Ops -> Night` の順で遷移できる
5. `Day Ops` に `連絡 / 121日程調整 / タスク / 支出メモ` がある
6. 各リストで項目追加、完了、明日回し、削除、戻すができる
7. `open` の項目が残っている限り `Night` へ進めない
8. `carryOver` 指定した項目が前日ログの `明日のリマインド` に自動追加される
9. `carryOver` 指定した項目が翌日の `Day Ops` に自動で引き継がれる
10. 同じ持ち越し項目が翌日に重複生成されない
11. `Markdown / JSON / Logs` に `Day Ops` 情報が出る
12. スマホ画面で固定進捗、固定タイマー、固定保存ボタンが押しづらくならない

## 14. 実装上の注意

- `carryOver` は「未完了のまま放置」ではなく「明日に回す決定をした」状態として扱う
- 夜画面へ進める条件は「全件完了」ではなく「全件が完了か明日回しに整理済み」である
- 自動保存は残すが、保存ボタンはユーザー心理の安心のために残す
- 小型固定タイマー、固定進捗、固定保存 FAB の `z-index` を分離して衝突を防ぐ
- 既存の `Boot`, `Logs`, `Settings` の挙動は壊さない
