module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        clean: { //���Ŀ���ļ����ļ�
            test: {
                src: "build"
            }
        },
        copy: {
            test: {
                expand: true,
                cwd: 'src',//Դ�ļ�·��
                src: '**',//Դ�ļ�Ŀ¼�µ������ļ�
                dest: 'build/',//Ŀ���ļ�·������Դ�ļ��µ��ļ����Ƶ���Ŀ¼��
                flatten: false,//����ָ���Ƿ񱣳��ļ�Ŀ¼�ṹ
                filter: 'isFile',
            },
        },
        uglify: {//ѹ��js�ļ�
            test: {
                files: [{
                    expand: true,
                    cwd: 'src/js', //jsԴ�ļ�Ŀ¼
                    src: '*/*.js', //����js�ļ�
                    dest: 'build/js' //�������Ŀ¼��
                }]
            }
        },
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: ['*.html', "*.js", "*.json", "*/*.js"],
            tasks: ['connect']
        },
        connect: {
            options: {
                livereload: false,
                port: 8452,
                open: false
                // ,
                // base: 'www-root'
            },
            server: {}

        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // Ĭ������)
    grunt.registerTask('default', ['connect','watch']);
    grunt.registerTask('test', ['clean:test','copy:test', 'uglify:test', 'cssmin:test', 'htmlmin:test']);
}



//module.exports = function(grunt) {
//    // ��Ŀ����
//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        clean: { //���Ŀ���ļ����ļ�
//            test: {
//                src: "build"
//            }
//        },
//        copy: {
//            test: {
//                expand: true,
//                cwd: 'src',//Դ�ļ�·��
//                src: '**',//Դ�ļ�Ŀ¼�µ������ļ�
//                dest: 'build/',//Ŀ���ļ�·������Դ�ļ��µ��ļ����Ƶ���Ŀ¼��
//                flatten: false,//����ָ���Ƿ񱣳��ļ�Ŀ¼�ṹ
//                filter: 'isFile',
//            },
//        },
//        uglify: {//ѹ��js�ļ�
//            test: {
//                files: [{
//                    expand: true,
//                    cwd: 'src/js', //jsԴ�ļ�Ŀ¼
//                    src: '*/*.js', //����js�ļ�
//                    dest: 'build/js' //�������Ŀ¼��
//                }]
//            }
//        },
//        // sass: {
//        //   payment: {
//        //     files: [{
//        //       expand: true,
//        //       cwd: 'src',
//        //       src: ['*.scss'],
//        //       dest: 'payment/build',
//        //       ext: '.css'
//        //     }]
//        //   }
//        // },
//        cssmin: { //ѹ��css
//            test: {
//                "files": {
//                    'test/build/css/main.css': ['src/css/*.css']//�����������css�ļ�ѹ����һ��Ŀ���ļ�
//                }
//            }
//        },
//        htmlmin: { //ѹ��html
//            test: {
//                options: { // Target options
//                    removeComments: true,
//                    collapseWhitespace: true
//                },
//                files: [{
//                    expand: true, // Enable dynamic expansion.
//                    cwd: 'src/html', // Src matches are relative to this path.
//                    src: ['html/*.html'], // Actual pattern(s) to match.
//                    dest: 'build/', // Destination path prefix.
//                    ext: '.html', // Dest filepaths will have this extension.
//                    extDot: 'first' // Extensions in filenames begin after the first dot
//                }]
//            }
//        }
//    });
//    // �����ṩ"uglify"����Ĳ��
//    grunt.loadNpmTasks('grunt-contrib-clean');
//    grunt.loadNpmTasks('grunt-contrib-copy');
//    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-cssmin');
//    grunt.loadNpmTasks('grunt-contrib-htmlmin');
//    // grunt.loadNpmTasks('grunt-contrib-sass');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    // Ĭ������
//    grunt.registerTask('test', ['clean:test','copy:test', 'uglify:test', 'cssmin:test', 'htmlmin:test']);
//}