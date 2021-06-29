# docker-nginx-node-mongodb
deploy application demo with docker

Use docker to build `nodejs` `nginx` `mongodb`

## Quickly started
MacOS or Windows: download [Docker Desktop](https://www.docker.com/products/docker-desktop).

Linux: use `yum install`:

## project structure
```
docker-nginx-node-mongodb/
├── docker-compose.yml
├── logs
│   └── nginx
│       └── error.log
├── mongodb
│   ├── Dockerfile
│   └── mongo.conf
├── nginx
│   ├── cert
│   ├── conf.d
│   ├── Dockerfile
│   └── nginx.conf
├── node
│   ├── Dockerfile
│   └── koa2-demo
│       ├── app.js
│       ├── bin
│       │   └── www
│       ├── node_modules
│       ├── package.json
│       ├── package-lock.json
│       ├── public
│       │   ├── async.js
│       │   └── stylesheets
│       │       └── style.css
│       ├── README.md
│       ├── routes
│       │   ├── index.js
│       │   └── users.js
│       ├── schema
│       │   └── index.js
│       └── views
│           ├── detail.jade
│           ├── error.jade
│           ├── index.jade
│           └── layout.jade
└── README.md
```

## Install docker
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
**Apply executable permissions to the binary**
```
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```
**Start Docker**
```
sudo systemctl start docker
```
**Test**
```bash
docker -v
docker-compose -v
```

## Stat Project

**Clone the project code to your web directory (eg: /home/wwwroot/)**
```bash
git clone https://github.com/sonic0828/docker-nginx-node-mongodb
```
**Start app**
``` bash
cd docker-nginx-node-mongodb
docker-compose up -d
```
**Command line input**
``` bash
docker ps
```
**And you can see that the following containers have been started**
``` bash
CONTAINER ID   IMAGE                              COMMAND                  CREATED         STATUS         PORTS                                                                      NAMES
35b613edce77   docker-nginx-node-mongodb_nginx    "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:443->443/tcp, :::443->443/tcp   docker-nginx-node-mongodb_nginx_1
4b556bf1c394   docker-nginx-node-mongodb_nodejs   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:3030->3030/tcp                                                   docker-nginx-node-mongodb_nodejs_1
357980c55d70   docker-nginx-node-mongodb_mongo    "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   127.0.0.1:27017->27017/tcp                                                 docker-nginx-node-mongodb_mongo_1
```

**like that you can access the api:**
``` bash
#local
http://127.0.0.1:3030

#or service
http://{your service ip}:3030
```

Enjoy~
