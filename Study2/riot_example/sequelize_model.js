const UserModel = sequelize.define(
  'users',
  {
    userId: {
      field: 'user_id',
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    }, // INT(11)       NOT NULL  PRIMARY KEY  AUTO_INCREMENT
    lastName: {
      field: 'last_name',
      type: Sequelize.STRING(32),
      allowNull: true
    },
    firstName: {
      field: 'first_name',
      type: Sequelize.STRING(32),
      allowNull: true
    }
  },
  {
    timestamps: true,
    createdAt: false, //デフォルト項目を生成しないように
    updatedAt: false,  //デフォルト項目を生成しないように
    tableName: "users" //明示的にテーブル名を指定
  }
)
