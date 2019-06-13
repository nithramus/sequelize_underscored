# sequelize_underscored

This is a repo to demonstrate a bug with underscored option on sequelize.

We had the problem when we moved from sequelize 4 to 5.

It is coming from the option underscored we are using. When trying to update an association fields:

If we define "project_id" in our database, linking a user and a project.
In sequelize 5, if we try to create or update the field { project_id: 1 }, the field will not be used.
But if we try { projectId: 1}, our field project_id will be set to 1.

How to reproduce:
In main, define valid database, user and password.

```
npm install
node main.js
```

You can now check the user database, the first user got a null value in project_id, the second got the good value
