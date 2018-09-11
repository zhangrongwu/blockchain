vMsg="$1"

npm run build
project_path=$(cd `dirname $0`; pwd)

git add .
git commit -m ${vMsg}
git push -u origin master
