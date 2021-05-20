# 使用 mongo 最新版镜像
FROM mongo:latest
# 把宿主机的 Mongo 配置文件拷贝到容器内
COPY mongo.conf /usr/local/etc/mongo/mongo.conf
# 映射外部 DB 的存储文件到容器内
VOLUME /data/db /data/configdb
# 启动 mongo
CMD ["mongod"]

# 暴露 27017 端口到宿主机
EXPOSE 27017
