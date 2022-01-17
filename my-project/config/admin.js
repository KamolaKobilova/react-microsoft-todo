module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f533921e761ad1426564b203deb456c'),
  },
});
