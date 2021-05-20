# docker-nginx-node-mongodb
deploy application demo with docker

Use docker to build nodejs/nginx/mongodb

## Quickly started
MacOS or Windows: download [Docker Desktop](https://www.docker.com/products/docker-desktop).
Linux: use `yum install`:


**Clear Old Docker**
```
sudo yum remove docker \
				docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-selinux \
                docker-engine-selinux \
                docker-engine
```
**Installation dependence**
```
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```
**Set yum srouce**(Optional)
```
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
**Install Docker-ce**
```
sudo yum -y install docker-ce
```
**Install Docker-compose**
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
**Start Docker**
```
sudo systemctl start docker
```
**Test**
```
docker -v
docker-compose -v
```


you will see the version callback
```
git clone https://github.com/sonic0828/docker-nginx-node-mongodb
```
start app
```
docker-compose up -d
```
when it done, you need configuration `node` connect to `mongodb`, the template at `node/.env.example`, you can copy and rename it to `.env`, the file contains the host/username/password..., then enter the mongo's container, configuration admin account and a lot:
```
docker ps
CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS                                      NAMES
57281a1e4106        egg-docker-template_nodejs   "docker-entrypoint.s…"   3 hours ago         Up 3 hours          127.0.0.1:7001->7001/tcp                   egg-docker-template_nodejs_1
596247f36cbe        egg-docker-template_nginx    "/bin/sh -c nginx"       3 hours ago         Up 3 hours          0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   egg-docker-template_nginx_1
9bcac416cd63        egg-docker-template_mongo    "docker-entrypoint.s…"   3 hours ago         Up 3 hours          127.0.0.1:27017->27017/tcp                 egg-docker-template_mongo_1
```



like that you can access the api:
```
http://127.0.0.1:3030
```

