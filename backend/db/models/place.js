'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    image: DataTypes.TEXT
  }, {});
  Place.associate = function (models) {
    // associations can be defined here
    Place.belongsTo(models.User, { foreignKey: 'userId' })
    Place.hasMany(models.Review, { foreignKey: 'placeId' })
    Place.hasMany(models.Booking, { foreignKey: 'placeId' })
  };
  return Place;
};
