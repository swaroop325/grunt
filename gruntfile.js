module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    multi: {
      name: "multisample",
      version: "1.0",
    },
    //     pkg: grunt.file.readJSON("package.json"),
    //     uglify: {
    //       options: {
    //         banner:
    //           '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    //       },
    //       build: {
    //         src: "src/<%= pkg.name %>.js",
    //         dest: "build/<%= pkg.name %>.min.js",
    //       },
    //     },
  });

  //   // Load the plugin that provides the "uglify" task.
  //   grunt.loadNpmTasks("grunt-contrib-uglify");

  //Task with parameter.
  grunt.registerTask("task1", "task1", function (name) {
    console.log("hi " + name);
  });

  //Task without parameter.
  grunt.registerTask("task2", "task2", function () {
    console.log("basic task");
  });

  //default
  grunt.registerTask("default", ["task1:Swaroop", "task2"]);

  grunt.registerMultiTask("multi", "description", function () {
    grunt.log.writeln("printing " + this.target + " " + this.data);
  });
};
