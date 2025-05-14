# from node# 基础镜像
FROM node:23-slim AS builder

# 设置工作目录
WORKDIR /app

RUN npm install -g pnpm@10 --registry=https://registry.npmmirror.com

# 复制依赖文件
COPY .npmrc /app/
COPY package*.json /app/
COPY pnpm-lock.yaml /app/
# COPY patches /app/patches

# 安装依赖
RUN pnpm install

# 复制应用程序代码
COPY . .

# 构建应用程序
RUN pnpm build

############################################################################################################

FROM node:23-slim

# 设置工作目录
WORKDIR /app

# 复制打包后的文件
COPY --from=builder /app/.output /app/.output
# TODO: 静态文件部分需使用nginx代理或者cdn

# 设置环境变量
ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

# 启动应用程序
ENTRYPOINT [ "node", ".output/server/index.mjs"]
# docker build -t yiloc-langding-fe:1.0.0 .
