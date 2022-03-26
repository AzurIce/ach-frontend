import proxy from "http-proxy-middleware";
module.exports = function (app) {
    app.use(
        "/api",
        proxy.createProxyMiddleware({
            target: "http://localhost:8888",
            changeOrigin: true,
        })
    );
};
