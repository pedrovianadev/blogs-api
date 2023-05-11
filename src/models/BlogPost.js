module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.STRING, allowNull: false },
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: { type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
        updated: { type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
    },
    {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'id', as: 'user'})
    };

    return BlogPost;
};