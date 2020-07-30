FROM node:8.9.4-alpine
MAINTAINER 178073575@qq.com

#将代码移动到容器中的 /ndoe 路径下
COPY . /node

#指定工作目录
WORKDIR /node

#安装PM2
RUN npm install

#暴露容器的3000端口
EXPOSE 3000

#启动服务
CMD [ "pm2-runtime", "npm", "--", "start" ]