FROM node:16

# 拷贝项目文件进行构建
WORKDIR /app/koa2-demo
COPY ./koa2-demo/package.json ./
RUN npm install --registry=https://mirrors.tencent.com/npm/

# 拷贝项目文件
COPY ./koa2-demo/* ./

# 启动服务
CMD ["npm","run","start"]

# 暴露 3030 端口到宿主机
EXPOSE 3030