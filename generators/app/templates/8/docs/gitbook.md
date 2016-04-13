# GitBook support

https://github.com/GitbookIO/gitbook

Dependency on `ebook-convert` from Calibre:

```bash
brew cask install calibre
echo 'export PATH=~/Applications/calibre.app/Contents/MacOS/:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

Install GitBook.

```bash
npm install gitbook-cli -g
cd src
npm install
```

Initialize the project. If you make changes to the SUMMARY.md, re-initalize.

```bash
# run at root of repo
gitbook init
```

Live reload server at http://localhost:4000

```bash
gitbook serve
```
