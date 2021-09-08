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
    createdAt: false, //�f�t�H���g���ڂ𐶐����Ȃ��悤��
    updatedAt: false,  //�f�t�H���g���ڂ𐶐����Ȃ��悤��
    tableName: "users" //�����I�Ƀe�[�u�������w��
  }
)
