const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
})

async function createUser() {

    const User = sequelize.define('user', {
        // attributes
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING
        }
      }, {
        // ################ Setting underscored to true
          underscored:true
      });
    
      const Project = sequelize.define('projects', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
        name: {
          type: Sequelize.STRING,
        // ################ Setting underscored to true
          allowNull: false
        },
      }, {
        underscored:true
      });
      User.belongsTo(Project)
      await sequelize.sync({force: true})
      await Project.create({name: 'test' });
      await Project.create({name: 'test' });

      //################# Here the tests

      // This will not work and project_id will not be set
      await User.create({first_name: 'firstUser', last_name: 'firstUser', project_id: 1})
      // This will work and it will set project_id to 2
      await User.create({first_name: 'secondUser', last_name: 'secondUser', projectId: 2})    
    
}
createUser()
