module.exports = {
  apps: [
    {
      name: "finuniques.in",
      script: "npm",
      args: "start", // next start
      cwd: "/home/sevenu/public_html/Sevenuniques_Utility_Website",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
