'use strict';

module.exports = (sequelize: any, DataTypes: any) => {
  const Listing = sequelize.define('Listing', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    from: {
      type: DataTypes.DATE
    },
    till: {
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.FLOAT
    }
  })

  Listing.associate = (models: any) => {
    Listing.belongsTo(models.Asset);
  }

  return Listing;
}