'use strict'

module.exports = (sequelize: any, DataTypes: any) => {
  const Portfolio = sequelize.define('Portfolio', {
    
    
    date_bought: {
      type: DataTypes.DATE
    },
    date_sold: {
      type: DataTypes.DATE
    },
    bought_for: {
      type: DataTypes.FLOAT
    },
    sold_for: {
      type: DataTypes.FLOAT
    },
    holding: {
      type: DataTypes.BOOLEAN
    },
    mkt_price_floor: {
      type: DataTypes.FLOAT
    },
    mkt_price_median: {
      type: DataTypes.FLOAT
    },
    mkt_price_ML: {
      type: DataTypes.FLOAT
    },
    realized_PL: {
      type: DataTypes.FLOAT
    }
  })

  Portfolio.associate = (models: any) => {
    Portfolio.belongsToMany(models.Asset, {
      through: "Join_Portfolio_Asset"
    })
  }

  return Portfolio;
}