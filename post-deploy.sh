export NVM_DIR="/home/deploy/.nvm";
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh";
nvm use 9.3.0;
rm -rf dist_timeless;
npm install;
npm run build;
if [ -d "./dist_timeless" ]
then
  rm -rf dist;
  mv dist_timeless dist;
fi
