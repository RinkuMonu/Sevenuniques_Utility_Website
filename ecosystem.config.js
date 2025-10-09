module.exports = {
  apps: [
    {
      name: "nextjs-static-site",
      script: "serve",
      args: "-s out -l 3000",  // out folder ko port 3000 par serve karega
      cwd: "/home/sevenu/public_html/Sevenuniques_Utility_Website", // project ka path
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
