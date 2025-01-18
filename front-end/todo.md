* 关于内置class的扩展(Set、Map): 先实现ie标准版, 再定义超类扩展更多方法(内部判断使用标准版还是ie版), 最后用派生类响应式封装
* Map 新增 setIfAbsent 方法, 仅在没有key时设置值, 并返回值
* Map 新增 deleteAndReturn 方法, 删除key, 并返回删除对应的值
* 一些复杂工具(防抖, 线程池)考虑用class实现
* 关于延时提供, Promise的封装, 不要通过taskList的方式实现