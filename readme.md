## 环境部署

- 1,复制node_modules目录到根目录下,为了安装mysql的nodejs的驱动,(***mysql要单独安装***)

- 2,只有这样,才可以执行 npm install mysql成功

- 3,命令行执行node test_mysql.js


![](https://github.com/zxx1988328/nodejs-mysql/blob/master/img/mysql_test.png)


## MYSQL CURD

	CREATE DATABASE IF NOT EXISTS nodesample CHARACTER SET UTF8;
	
	USE nodesample;
	
	SET FOREIGN_KEY_CHECKS=0;
	
	DROP TABLE IF EXISTS `userinfo`;
	CREATE TABLE `userinfo` (
	  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
	  `UserName` varchar(64) NOT NULL COMMENT '用户名',
	  `UserPass` varchar(64) NOT NULL COMMENT '用户密码',
	  PRIMARY KEY (`Id`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';


### add

![](https://github.com/zxx1988328/nodejs-mysql/blob/master/img/curd_result.png)

### add_select

![](https://github.com/zxx1988328/nodejs-mysql/blob/master/img/database.png)


### delete

![](https://github.com/zxx1988328/nodejs-mysql/blob/master/img/delete_data.png)

### del_select

![](https://github.com/zxx1988328/nodejs-mysql/blob/master/img/del_select.png)
