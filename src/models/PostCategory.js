module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true },
        },
        {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
        });
    
        PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
            });
    
        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
        };
    
        return PostCategory;
};