vMsg="$1"

npm run build
project_path=$(cd `dirname $0`; pwd)
#dist="${project_path}/dist"
#demo="/Users/zhangrongwu/HTML5/github/NewsProj-Preview"
#cp -rf ${dist} ${demo}
#cd ${demo}

git add .
git commit -m ${vMsg}
git push -u origin master
