
name: QQ阅读APP

on:
  workflow_dispatch:
  schedule:
     - cron: '*/30 0-3,6-14 * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        QQ_QQreadURL: ${{ secrets.QQ_QQreadURL }}
        TZ: Asia/shanghai
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        run: |
          npm install
      - name: '运行 【QQ阅读APP】'
        if: env.QQ_QQreadURL
        run: |
          node Task/QQread.js
        env:
          PUSH_KEY: ${{ secrets.PUSH_KEY}}
          BARK_PUSH: ${{ secrets.BARK_PUSH}}
          BARK_SOUND: ${{ secrets.BARK_SOUND}}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN}}
          TG_USER_ID: ${{ secrets.TG_USER_ID}}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN}}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET}}
          QYWX_KEY: ${{ secrets.QYWX_KEY}}
          IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY}}
          QQ_SKEY: ${{ secrets.QQ_SKEY}}
          QQ_MODE: ${{ secrets.QQ_MODE}}
          PUSH_PLUS_TOKEN: ${{ secrets.PUSH_PLUS_TOKEN}}
          PUSH_PLUS_USER: ${{ secrets.PUSH_PLUS_USER}}
          TG_PROXY_HOST: ${{ secrets.TG_PROXY_HOST}}
          TG_PROXY_PORT: ${{ secrets.TG_PROXY_PORT}}
