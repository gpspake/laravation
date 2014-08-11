Laravation
==========
Laravel + Zurb Foundation

####2 in 1
Laravation makes getting started easy by combining two powerful frameworks:   
[Laravel](http://laravel.com/) - "the PHP framework for web artisans" and   
[Zurb Foundation](http://foundation.zurb.com/) - "The most advanced responsive front-end framework in the world."

####Choose between LibSass or Compass

Laravation comes with __grunt-libsass__ and __grunt-contrib-compass__ so you can use Grunt even if you use Compass.

####Twig Support  
If you prefer [Twig](http://twig.sensiolabs.org/) to [Blade](http://laravel.com/docs/templates#blade-templating), Laravation is ready-to-go with TwigBridge. To learn more, check out [TwigBridge on Github](https://github.com/rcrowe/TwigBridge).

####Fast Development with  Custom Generators  
Laravation also comes with the Laravel 4 Generators package by Jeffrey Way. For more information, check out [Laravel-4-Generators on Github](https://github.com/JeffreyWay/Laravel-4-Generators)

####Props
Laravation was inspired by [Larastrap](https://github.com/memphisphp/larastrap) by [@MemphisPHP](https://twitter.com/MemphisPHP)

## Required
- PHP >= 5.4
- MCrypt PHP Extension
- [Composer](http://www.getcomposer.org)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/getting-started)
 - [Node.js](http://nodejs.org/)

## Recommended
- Ruby 1.9.3
  - Foundation Gem
  - Compass Gem

##Installation

- Run Composer Install  
```
composer install
```

- Install Bower and Grunt (If you haven't already)  
```
sudo npm install -g bower grunt-cli
```

- Run Bower Install  
```
bower install
```

##Updating Foundation
Laravation was created as a Libsass project using the Foundation Gem.

- Install the Foundation Gem (Requires Ruby).  
```
gem install foundation
```

- Update Foundation with a single command  
```
foundation update
```

For more information check out [Getting Started With SASS](http://foundation.zurb.com/docs/sass.html) in the Foundation Docs

##SASS
Laravation uses Grunt to compile SASS.  
You can use __LibSass__ ([grunt-libsass](https://www.npmjs.org/package/grunt-libsass)) or unleash the power of __Compass__ ([grunt-contrib-compass](https://www.npmjs.org/package/grunt-contrib-compass)).  
Compass is really powerful and has a lot of great features but it requires the Compass Gem and takes a longer to compile than Libsass. The choice is yours.

###Using Compass
If you want to use Compass, you'll need the Compass Gem (Requires Ruby)

- Install the Compass Gem   
```
gem install compass
```

grunt-contrib-compass is already loaded up and ready to go so, once you've installed the gem, just comment out the 'sass' build task in Gruntfile.js and uncomment the 
'compass' one.

- It should look like this  
```
//grunt.registerTask('build', ['sass']);  
grunt.registerTask('build', ['compass']);
```

- Then just run grunt  
```
grunt
```

Note: Since Compass is handled by grunt, there's no need for a config.rb file but you can still use one if you want. For more information, check out [grunt-contrib-compass](https://www.npmjs.org/package/grunt-contrib-compass)

###Using Libsass
If you aren't interested in using Compass, there's no extra work required.

- Just run grunt.  
```
grunt
```
