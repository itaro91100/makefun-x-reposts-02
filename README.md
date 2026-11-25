# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/itaro91100/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/itaro91100/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the [makefun-x-reposts-02](https://make.fun/competitions/makefun-x-reposts-02) bounty ($500): repost @makefunai's newest posts on X.

## The posts

Seven quote posts from the public X account @kenneloutis0, each quoting a different @makefunai post from the bounty pool (every @makefunai post with id >= 2125053632605196760, threads included). Each post carries @makefunai and this bounty's play code `makefun-squash-rabbit-hockey` in its text, and stays public until the results are out. The full list lives in [POSTS.json](POSTS.json):

| # | Post | Quotes (@makefunai) |
|---|------|---------------------|
| 1 | https://x.com/kenneloutis0/status/2125711151917158416 | Mike Houser / AOD — https://x.com/makefunai/status/2125053632605196760 |
| 2 | https://x.com/kenneloutis0/status/2125711412102390259 | Slotbound — https://x.com/makefunai/status/2125246707512553850 |
| 3 | https://x.com/kenneloutis0/status/2125711594663669961 | "Make GTA 6" results — https://x.com/makefunai/status/2125375203744391226 |
| 4 | https://x.com/kenneloutis0/status/2125714854300516682 | Tristan Debroise — https://x.com/makefunai/status/2125609728088666351 |
| 5 | https://x.com/kenneloutis0/status/2125711947413000522 | Best-game winners — https://x.com/makefunai/status/2125247026728235268 |
| 6 | https://x.com/kenneloutis0/status/2125712136555110505 | GTA 6-style $1,666 — https://x.com/makefunai/status/2125053991293784431 |
| 7 | https://x.com/kenneloutis0/status/2125712444932972825 | Best-game winners — https://x.com/makefunai/status/2125610034209939567 |

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, stdlib only) reads `POSTS.json`, checks it is a list of the form `{"posts": [...]}`, validates every entry is an `x.com/<user>/status/<id>` URL, and prints the seven URLs.

## License

MIT — see [LICENSE](LICENSE).

## How this entry was built

The seven posts were written for the @makefunai posts they quote, posted from the public account @kenneloutis0, and verified one by one before submitting: every post is public, quotes a different pool post, carries @makefunai, and carries the play code `makefun-squash-rabbit-hockey` — the code for this bounty and this account. The earlier draft of this entry carried the wrong code and was never submitted; its posts were deleted and reposted with the correct code.

